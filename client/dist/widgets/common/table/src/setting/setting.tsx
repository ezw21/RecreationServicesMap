/** @jsx jsx */
import {
  React,
  Immutable,
  ImmutableObject,
  DataSourceJson,
  IMState,
  jsx,
  UseDataSource,
  ThemeVariables,
  SerializedStyles,
  css,
  urlUtils,
  DataSourceManager,
  IMUseDataSource,
  ImmutableArray,
  polished,
  DataSource
} from 'jimu-core'
import {
  defaultMessages as jimuUIDefaultMessages,
  Button,
  Icon,
  Tooltip,
  Alert
} from 'jimu-ui'
import LayerConfig from './layer-config'
import {
  SettingSection,
  SettingRow,
  SidePopper
} from 'jimu-ui/advanced/setting-components'
import { AllWidgetSettingProps, builderAppSync } from 'jimu-for-builder'
import {
  IMConfig,
  LayersConfig,
  SelectionModeType,
  TableArrangeType
} from '../config'
import defaultMessages from './translations/default'
import { List, TreeItemActionType, TreeItemType } from 'jimu-ui/basic/list-tree'
import LayerConfigDataSource from './layer-config-ds'

const IconClose = require('jimu-ui/lib/icons/close.svg')
const pointerIcon = require('jimu-ui/lib/icons/click-outlined-48.svg')

interface ExtraProps {
  dsJsons: ImmutableObject<{ [dsId: string]: DataSourceJson }>
  activeTabId: string
}

export interface WidgetSettingState {
  showLayerPanel: boolean
  refreshPanel: boolean
  dataSources: { [dsId: string]: DataSource }
}

export default class Setting extends React.PureComponent<
AllWidgetSettingProps<IMConfig> & ExtraProps,
WidgetSettingState
> {
  index: number
  dsManager: DataSourceManager
  dsHash: { [index: number]: ImmutableObject<UseDataSource> }
  sidePopperTrigger = React.createRef<HTMLDivElement>()

  static mapExtraStateProps = (
    state: IMState,
    props: AllWidgetSettingProps<IMConfig>
  ): ExtraProps => {
    return {
      dsJsons: state.appStateInBuilder.appConfig.dataSources,
      activeTabId:
        state && state.appStateInBuilder?.widgetsState[props.id]?.activeTabId
    }
  }

  constructor (props) {
    super(props)
    this.index = 0
    this.dsManager = DataSourceManager.getInstance()
    this.updateDsHash(
      this.props.config.layersConfig
        ? ((this.props.config.layersConfig as unknown) as LayersConfig[])
        : []
    )
    this.state = {
      showLayerPanel: false,
      refreshPanel: false,
      dataSources: {}
    }
  }

  updateDsHash = (layersConfig: LayersConfig[]) => {
    this.dsHash = {}
    let index = 0
    layersConfig.map(item => {
      this.dsHash[index] = item.useDataSource
      index++
    })
  }

  getArrayMaxId (layersConfigs: ImmutableArray<LayersConfig>): number {
    const numbers = layersConfigs.map(layersConfig => {
      return layersConfig.id.split('-').reverse()[0]
    })
    return numbers.length > 0 ? Math.max.apply(null, numbers) : 0
  }

  getNewConfigId = (dsId): string => {
    const index =
      this.props.config?.layersConfig.length > 0
        ? this.getArrayMaxId(this.props.config.layersConfig)
        : 0
    return `${dsId}-${index + 1}`
  }

  // save currentSelectedDs to array
  dataSourceChangeSave = (useDataSources: UseDataSource[]) => {
    if (!useDataSources) {
      return
    }
    const currentIMUseDs = Immutable(useDataSources[0])
    const selectedDs = this.dsManager.getDataSource(currentIMUseDs.dataSourceId)
    const allFields = selectedDs && selectedDs.getSchema()
    const defaultInvisible = [
      'CreationDate',
      'Creator',
      'EditDate',
      'Editor',
      'GlobalID'
    ]
    const allFieldsDetails = allFields?.fields ? Object.values(allFields?.fields) : []
    let initTableFields = allFieldsDetails.filter(
      item => !defaultInvisible.includes(item.jimuName)
    )
    // If there are too many columns, only the first 50 columns will be displayed by default
    if (initTableFields?.length > 50) {
      initTableFields = initTableFields.slice(0,50)
    }
    this.dsManager
      .createDataSourceByUseDataSource(Immutable(useDataSources[0]))
      .then(currentDs => {
        const layerItem: LayersConfig = {
          id: this.getNewConfigId(currentDs.id),
          name: currentDs.getLabel(),
          useDataSource: currentIMUseDs,
          allFields: allFieldsDetails,
          tableFields: initTableFields,
          enableAttachements: false,
          enableEdit: false,
          allowCsv: false,
          enableSearch: false,
          searchFields: '',
          enableRefresh: true,
          enableSelect: true,
          selectMode: SelectionModeType.Single
        }

        const currentLayer = this.props.config.layersConfig[this.index]
        let layerItems
        if (currentLayer) {
          // update config, reset other opts for current config
          const _conf = this.props.config.layersConfig.asMutable({ deep: true })
          _conf.splice(this.index, 1, layerItem)
          layerItems = Immutable(_conf)
        } else {
          // add new config
          layerItems = this.props.config.layersConfig.concat([
            Immutable(layerItem)
          ])
        }
        // update dsHash
        this.dsHash[this.index] = currentIMUseDs
        this.updateDsHash(layerItems)

        const config = {
          id: this.props.id,
          config: this.props.config.set('layersConfig', layerItems),
          useDataSources: this.getUseDataSourcesByDsHash()
        }
        this.props.onSettingChange(config)
      })
  }

  onCloseLayerPanel = () => {
    this.setState({ showLayerPanel: false })
    this.index = 0
  }

  getUniqueValues = (array1: any[] = [], array2: any[] = []): any[] => {
    const array = array1.concat(array2)
    const res = array.filter(function (item, index, array) {
      return array.indexOf(item) === index
    })
    return res
  }

  getUseDataSourcesByDsHash = (): UseDataSource[] => {
    const dsHash: any = {}
    Object.keys(this.dsHash).map(index => {
      const dsId = this.dsHash[index].dataSourceId
      let ds: IMUseDataSource
      if (!dsHash[dsId]) {
        ds = this.dsHash[index]
      } else {
        ds = Immutable({
          dataSourceId: this.dsHash[index].dataSourceId,
          mainDataSourceId: this.dsHash[index].mainDataSourceId,
          dataViewId: this.dsHash[index].dataViewId,
          rootDataSourceId: this.dsHash[index].rootDataSourceId,
          fields: this.getUniqueValues(
            dsHash[dsId].fields,
            (this.dsHash[index].fields as unknown) as any[]
          )
        })
      }
      dsHash[dsId] = ds
    })

    // get new array from hash
    const dsArray = []
    Object.keys(dsHash).map(dsId => {
      dsArray.push(dsHash[dsId])
    })
    return dsArray
  }

  removeLayer = (index: number) => {
    if (this.index === index) {
      this.onCloseLayerPanel()
    }
    // del current filter item
    const _layer = this.props.config.layersConfig.asMutable({ deep: true })
    _layer.splice(index, 1)
    const fis = this.props.config.set('layersConfig', _layer)

    // update dsHash
    delete this.dsHash[index]
    this.updateDsHash(_layer)

    const config = {
      id: this.props.id,
      config: fis,
      useDataSources: this.getUseDataSourcesByDsHash()
    }
    this.props.onSettingChange(config)

    if (this.index > index) {
      this.index--
    }
    builderAppSync.publishChangeWidgetStatePropToApp({
      widgetId: this.props.id,
      propKey: 'removeLayerFlag',
      value: true
    })
  }

  optionChangeSave = (prop: string, value: any) => {
    const currentLayer = this.props.config.layersConfig[this.index]
    if (currentLayer) {
      const orgConfig = this.props.config
      const newConfig = orgConfig.setIn(['layersConfig', this.index.toString()], { ...currentLayer, [prop]: value })
      const config = {
        id: this.props.id,
        config: newConfig
      }
      this.props.onSettingChange(config)
    }
    builderAppSync.publishChangeWidgetStatePropToApp({
      widgetId: this.props.id,
      propKey: 'removeLayerFlag',
      value: true
    })
  }

  multiOptionsChangeSave = (updateOptions: any) => {
    const currentLayer = this.props.config.layersConfig[this.index]
    if (currentLayer) {
      const orgConfig = this.props.config
      const newConfig = orgConfig.setIn(['layersConfig', this.index.toString()], { ...currentLayer, ...updateOptions })
      const config = {
        id: this.props.id,
        config: newConfig
      }
      this.props.onSettingChange(config)
    }
  }

  getStyle = (theme: ThemeVariables): SerializedStyles => {
    return css`
      .widget-setting-table {
        .filter-item {
          display: flex;
          padding: 0.5rem 0.75rem;
          margin-bottom: 0.25rem;
          line-height: 23px;
          cursor: pointer;
          background-color: ${theme.colors.secondary};

          .filter-item-icon {
            width: 14px;
            margin-right: 0.5rem;
          }
          .filter-item-name {
            word-wrap: break-word;
          }
        }

        .filter-item-active {
          border-left: 2px solid ${theme.colors.palette.primary[600]};
        }

        .arrange-style-container {
          .arrange_container {
            margin-top: 10px;
            display: flex;
            .jimu-btn {
              padding: 0;
              background: ${theme.colors.palette.light[200]};
              &.active {
                border: 2px solid ${theme.colors.palette.primary[600]};
              }
            }
          }
        }
        .table-blank-placeholder {
          .placeholder-icon {
            color: ${theme.colors.palette.dark[200]};
          }
          & > div {
            top: 50%;
            transform: translateY(-50%);
            padding: 1rem;
          }
          p {
            font-size: ${polished.rem(14)};
            margin-top: ${polished.rem(16)};
            line-height: ${polished.rem(19)};
            color: ${theme.colors.palette.dark[500]};
          }
        }

        .setting-ui-unit-tree, .setting-ui-unit-list {
          width: 100%;
          .tree-item {
            justify-content: space-between;
            align-items: center;
            font-size: ${polished.rem(13)};
            &.tree-item_level-1 {
            }
            .jimu-checkbox {
              margin-right: .5rem;
            }
          }
        }
        .setting-ui-unit-list-new {
          padding-top: ${polished.rem(8)};
        }
      }
    `
  }

  formatMessage = (id: string, values?: { [key: string]: any }) => {
    const messages = Object.assign({}, defaultMessages, jimuUIDefaultMessages)
    return this.props.intl.formatMessage(
      { id: id, defaultMessage: messages[id] },
      values
    )
  }

  onShowLayerPanel = (index: number) => {
    const { showLayerPanel } = this.state
    if (index === this.index) {
      this.setState({ showLayerPanel: !showLayerPanel })
    } else {
      this.setState({
        showLayerPanel: true,
        refreshPanel: !this.state.refreshPanel
      })
      this.index = index
    }
  }

  switchTableType = (type: TableArrangeType) => {
    if (type !== this.props.config.arrangeType) {
      const config = {
        id: this.props.id,
        config: this.props.config.set('arrangeType', type)
      }
      this.props.onSettingChange(config)
    }
  }

  onItemUpdated = (parentItemJson, currentIndex: number) => {
    const { id, config } = this.props
    const newLayerConfigs = parentItemJson.map(item => {
      return item.itemStateDetailContent
    })
    const newConfig = {
      id,
      config: config.set('layersConfig', newLayerConfigs)
    }
    this.updateDsHash(newLayerConfigs)
    this.onShowLayerPanel(currentIndex)
    this.props.onSettingChange(newConfig)
  }

  onCreateDataSourceCreatedOrFailed = (dataSourceId: string, dataSource: DataSource) => {
    // The next state depends on the current state. Can't use this.state since it's not updated in in a cycle
    this.setState((state: WidgetSettingState) => {
      const newDataSources = Object.assign({}, state.dataSources)
      newDataSources[dataSourceId] = dataSource
      return { dataSources: newDataSources }
    })
  }

  isDataSourceAccessible = (dataSourceId: string) => {
    const dataSourceIsInProps = this.props.useDataSources?.filter(useDs => dataSourceId === useDs.dataSourceId).length > 0
    return this.state.dataSources[dataSourceId] !== null && dataSourceIsInProps
  }

  render () {
    const { showLayerPanel } = this.state
    const { theme, config } = this.props
    const newSheettString = this.formatMessage('newSheet')
    const itemsLength = config.layersConfig.length
    const advancedActionMap = {
      isItemFocused: (actionData, refComponent) => {
        const { itemJsons: [currentItemJson, parentArray] } = refComponent.props
        return showLayerPanel && parentArray.indexOf(currentItemJson) === this.index
      },
      overrideItemBlockInfo: ({ itemBlockInfo }, refComponent) => {
        return {
          name: TreeItemActionType.RenderOverrideItem,
          children: [{
            name: TreeItemActionType.RenderOverrideItemDroppableContainer,
            children: [{
              name: TreeItemActionType.RenderOverrideItemDraggableContainer,
              children: [{
                name: TreeItemActionType.RenderOverrideItemBody,
                children: [{
                  name: TreeItemActionType.RenderOverrideItemMainLine,
                  children: [{
                    name: TreeItemActionType.RenderOverrideItemDragHandle
                  }, {
                    name: TreeItemActionType.RenderOverrideItemIcon,
                    autoCollapsed: true
                  }, {
                    name: TreeItemActionType.RenderOverrideItemTitle
                  }, {
                    name: TreeItemActionType.RenderOverrideItemDetailToggle
                  }, {
                    name: TreeItemActionType.RenderOverrideItemCommands
                  }]
                }]
              }]
            }]
          }]
        }
      }
    }

    return (
      <div css={this.getStyle(theme)}>
        <div className='widget-setting-table'>
          {
            this.props.useDataSources?.map((useDs, index) => {
              return (
                <LayerConfigDataSource
                  key={index}
                  useDataSource={useDs}
                  onCreateDataSourceCreatedOrFailed={this.onCreateDataSourceCreatedOrFailed}
                />
              )
            })
          }
          <SettingSection className={`p-0 m-0 ${itemsLength > 0 ? '' : 'border-0'}`}>
            <div ref={this.sidePopperTrigger}>
              <SettingSection className='border-0'>
                <SettingRow>
                  <Button
                    className='w-100 text-dark set-link-btn'
                    type='primary'
                    onClick={() => {
                      this.onShowLayerPanel(itemsLength)
                    }}
                  >
                    <div className='w-100 px-2 text-truncate'>
                      {newSheettString}
                    </div>
                  </Button>
                </SettingRow>
              </SettingSection>

              <SettingSection className='pt-0 border-0'>
                <div className='setting-ui-unit-list'>
                  {!!itemsLength &&
                    <List
                      className='setting-ui-unit-list-exsiting'
                      itemsJson={Array.from(config.layersConfig).map((item, index) => ({
                        itemStateDetailContent: item,
                        itemKey: `${index}`,
                        itemStateTitle: item.name,
                        itemStateCommands: [
                          {
                            label: this.formatMessage('close'),
                            iconProps: () => ({ icon: IconClose, size: 12 }),
                            action: () => {
                              this.removeLayer(index)
                            }
                          }
                        ]
                      }))}
                      dndEnabled
                      renderOverrideItemDetailToggle={(actionData, refComponent) => {
                        const { itemJsons } = refComponent.props
                        const [ currentItemJson ] = itemJsons
                        const dsId = currentItemJson?.itemStateDetailContent?.useDataSource?.dataSourceId
                        const accessible = this.isDataSourceAccessible(dsId)
                        return !accessible ? <Alert
                          buttonType='tertiary'
                          form='tooltip'
                          size='small'
                          type='error'
                          text={this.formatMessage('dataSourceCreateError')}
                        >
                        </Alert> : ''
                      }}
                      onUpdateItem={(actionData, refComponent) => {
                        const { itemJsons } = refComponent.props
                        const [ currentItemJson, parentItemJson] = itemJsons
                        this.onItemUpdated(parentItemJson, +(currentItemJson as TreeItemType).itemKey)
                      }}
                      onClickItemBody={(actionData, refComponent) => {
                        const { itemJsons: [currentItemJson] } = refComponent.props
                        this.onShowLayerPanel(+(currentItemJson as TreeItemType).itemKey)
                      }}
                      {...advancedActionMap}
                    />
                  }
                  {itemsLength === this.index && showLayerPanel &&
                    <List
                      className='setting-ui-unit-list-new'
                      itemsJson={[{
                        name: '......'
                      }].map((item, x) => ({
                        itemStateDetailContent: item,
                        itemKey: `${this.index}`,
                        itemStateTitle: item.name,
                        itemStateCommands: []
                      }))}
                      dndEnabled={false}
                      renderOverrideItemDetailToggle={() => '' }
                      {...advancedActionMap}
                      isItemFocused={() => true}
                    />
                  }
                </div>
              </SettingSection>
            </div>
          </SettingSection>

          {itemsLength == 0 &&
            <div className='w-100 text-center table-blank-placeholder'>
              <div className="position-absolute w-100">
                <Icon size={48} icon={pointerIcon} className='placeholder-icon'/>
                <p>
                  {this.formatMessage('tableBlankStatus', {
                    SheetString: newSheettString
                  })}
                </p>
              </div>
            </div>
          }
          {itemsLength > 0 && (
            <SettingSection
              className='arrange-style-container'
              title={this.formatMessage('sheetStyle')}
            >
              <SettingRow className='arrange_container'>
                <Tooltip title={this.formatMessage('tabs')} placement='bottom'>
                  <Button
                    onClick={() => this.switchTableType(TableArrangeType.Tabs)}
                    icon
                    size='sm'
                    type='tertiary'
                    active={config.arrangeType === TableArrangeType.Tabs}
                  >
                    <Icon
                      autoFlip
                      width={109}
                      height={70}
                      icon={require('./assets/image_table_tabs.svg')}
                    />
                  </Button>
                </Tooltip>
                <Tooltip
                  title={this.formatMessage('dropdown')}
                  placement='bottom'
                >
                  <Button
                    onClick={() =>
                      this.switchTableType(TableArrangeType.Dropdown)}
                    className='ml-2'
                    icon
                    size='sm'
                    type='tertiary'
                    active={config.arrangeType === TableArrangeType.Dropdown}
                  >
                    <Icon
                      autoFlip
                      width={109}
                      height={70}
                      icon={require('./assets/image_table_dropdown.svg')}
                    />
                  </Button>
                </Tooltip>
              </SettingRow>
            </SettingSection>
          )}
          <SidePopper
            isOpen={showLayerPanel && !urlUtils.getAppIdPageIdFromUrl().pageId}
            position='right' toggle={this.onCloseLayerPanel} trigger={this.sidePopperTrigger?.current}
          >
            <LayerConfig
              {...config.layersConfig.asMutable({ deep: true })[this.index]}
              intl={this.props.intl}
              theme={theme}
              dataSourceChange={this.dataSourceChangeSave}
              optionChange={this.optionChangeSave}
              multiOptionsChange={this.multiOptionsChangeSave}
              onClose={this.onCloseLayerPanel}
            />
          </SidePopper>
        </div>
      </div>
    )
  }
}
