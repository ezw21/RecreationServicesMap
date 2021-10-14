/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IMFieldSchema, IntlShape, DataSource, CodedValue, SqlClause, ClauseOperator, ClauseSourceType, ClauseCascade, ClauseValueOptions, ClauseLabelDisplay, ClauseDisplayType, SqlExpressionMode } from 'jimu-core';
import { ClauseInputEditor, ClauseDisplayFormat, SqlExpressionSizeMode } from 'jimu-ui/basic/sql-expression-runtime';
interface SqlExprClauseProps {
    mode: SqlExpressionMode;
    sizeMode: SqlExpressionSizeMode;
    clause: SqlClause;
    dataSource: DataSource;
    isHosted?: boolean;
    onChange: (clause: SqlClause, isDuplicated?: boolean) => void;
    className?: string;
}
interface IntlProps {
    intl: IntlShape;
}
interface State {
    rerender: boolean;
    supportCaseSensitive: boolean;
    supportAskForValue: boolean;
    isValueLabelPanelShown: boolean;
}
export declare class _SqlExprClause extends React.PureComponent<SqlExprClauseProps & IntlProps, State> {
    _isMounted: boolean;
    operatorList: ClauseOperator[];
    displayTypeList: ClauseDisplayFormat;
    codedValues: CodedValue[];
    fieldObj: IMFieldSchema;
    labelRef: any;
    constructor(props: any);
    getFieldObj: () => void;
    getCodedValues(): CodedValue[];
    _updateTwoStates: (operator: ClauseOperator, sourceType: ClauseSourceType, rerender?: boolean) => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: SqlExprClauseProps, prevState: State): void;
    componentWillMount(): void;
    i18nMessage: (id: string) => string;
    isCascadeSupported: () => boolean;
    _updateCaseSensitiveState(operator: ClauseOperator, sourceType: ClauseSourceType): void;
    _updateAskForValueState(operator: ClauseOperator, sourceType: ClauseSourceType): void;
    getOperatorsByField: (field: IMFieldSchema) => ClauseOperator[];
    deleteClause: () => void;
    toggleCaseSensitive: () => void;
    duplicateClause: () => void;
    toggleValueLabelPanel: () => void;
    getLabel: () => string;
    onAskForValueOptsChange: (options: Record<string, any>) => void;
    onLabelBlur: (value: string, isDisplayLabel?: boolean) => void;
    onLabelChange: (label: string) => void;
    setValueLabelStatus: (type: ClauseDisplayType) => void;
    getAskForValueOptions: (OpenAskForValueByAuto?: boolean) => {
        label: any;
        display: ClauseLabelDisplay;
        hint: string;
        cascade: ClauseCascade;
    };
    /** * field ***/
    onFieldChange: (allSelectedFields: IMFieldSchema[]) => void;
    _updateOptionsByField: (field: IMFieldSchema, operator?: ClauseOperator) => ClauseValueOptions;
    /** * operator ***/
    onOperatorChange: (operator: ClauseOperator) => void;
    _updateOptionsByOperator: (field: IMFieldSchema, operator: ClauseOperator, jimuFieldName: string) => ClauseValueOptions;
    /** * value ***/
    onValueOptsChange: (valueOptions: ClauseValueOptions) => void;
    isUniqueOrMultipleOnOutputDS: (sourceType: any) => boolean;
    isOutputDsAndNoCodedValuesWhenUniqueOrMultiple: (sourceType: any) => boolean;
    shouldOpenAskForValueAutomatically: (sourceType: any) => boolean;
    /** * source type ***/
    onSourceTypeSelect: (sourceType: ClauseSourceType) => void;
    /** * style type ***/
    onInputTypeSelect: (inputEditor: ClauseInputEditor) => void;
    getValueOptions: () => ClauseValueOptions;
    getControllers: (clause: any, normalOperators: any) => jsx.JSX.Element;
    isPredefinedWithNoValues: (clause: any) => boolean;
    onChanged: (options: Record<string, any>) => void;
    render(): jsx.JSX.Element;
}
declare const SqlExpressionClause: React.ComponentType<Omit<SqlExprClauseProps & IntlProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}>;
export default SqlExpressionClause;
