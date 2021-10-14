/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IMDataViewJson, IMUseDataSource, DataSource, IntlShape, IMSqlExpression, OrderByOption, ImmutableObject, WidgetJson, ReactRedux, QueryParams } from 'jimu-core';
export interface DataViewSettingPopupProps {
    mainDataSource: DataSource;
    dataView: IMDataViewJson;
    isOpen: boolean;
    /**
     * Whether is setting main data source or data view.
     */
    isSettingMainDataSource?: boolean;
    disableRename?: boolean;
    disableDuplicate?: boolean;
    disableRemove?: boolean;
    /**
     * If there is no data view, will create a new data view using this value as data view id.
     */
    newDataViewId?: string;
    /**
     * If there is no data view, will create a new data view using this value as data view label.
     */
    newDataViewLabel?: string;
    className?: string;
    toggle: () => void;
    onApply: (dataView: IMDataViewJson) => void;
    onDuplicate?: (dataView: IMDataViewJson) => void;
}
interface ExtraProps {
    intl: IntlShape;
}
interface StateToProps {
    widgets: ImmutableObject<{
        [widgetId: string]: WidgetJson;
    }>;
}
interface State {
    dataView: IMDataViewJson;
    localDataSource: DataSource;
    queryParams: QueryParams;
    isTitleInputShown: boolean;
    isRemoveWarningOpen: boolean;
    isLocalDataSourceCreated: boolean;
    isLocalDataSourceLoaded: boolean;
    SqlExpressionBuilder: any;
    Sort: any;
    getAppConfigAction: any;
    isSqlExpressionValid: any;
}
declare class _DataViewSettingPopup extends React.PureComponent<DataViewSettingPopupProps & ExtraProps & StateToProps, State> {
    static count: number;
    titleInput: HTMLInputElement;
    __unmount: boolean;
    lastScrollTop: number;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: DataViewSettingPopupProps & ExtraProps & StateToProps, prevState: State): void;
    componentWillUnmount(): void;
    destroyLocalDataSource(): void;
    initQueryParams: () => void;
    setQueryParams: () => void;
    setLocalDataSource: () => void;
    loadLocalDataSource: () => void;
    getLocalLoadId(): string;
    getUseDataSource: (dataSource: DataSource) => IMUseDataSource;
    getNewDataView: (dataSource: DataSource) => IMDataViewJson;
    getPreviewTable: (dataSource: DataSource) => React.ReactNode;
    isNumeric: (n: any) => boolean;
    onScroll: (e: any) => void;
    onDuplicate: () => void;
    getDuplicateLabel(label: string): string;
    onRemove: (e: any) => void;
    removeDataView: (dataViewId: string) => void;
    onLabelChange: (e: any) => void;
    onSqlExprBuilderChange: (sqlExprObj: IMSqlExpression) => void;
    onSortChange: (sortData: OrderByOption[], index?: number) => void;
    onPageSizeChange: (value: number | string) => void;
    onToggleMaximum: (e: any, checked: boolean) => void;
    onMaximumChange: (value: number | string) => void;
    onApply: () => void;
    toggleTitleInput: () => void;
    toggleRemoveWarning: () => void;
    render(): jsx.JSX.Element;
}
export declare const DataViewSettingPopup: React.FC<import("react-intl").WithIntlProps<ReactRedux.Omit<React.ClassAttributes<_DataViewSettingPopup> & DataViewSettingPopupProps & ExtraProps & StateToProps, "widgets"> & DataViewSettingPopupProps>> & {
    WrappedComponent: React.ComponentType<ReactRedux.Omit<React.ClassAttributes<_DataViewSettingPopup> & DataViewSettingPopupProps & ExtraProps & StateToProps, "widgets"> & DataViewSettingPopupProps>;
};
export {};
