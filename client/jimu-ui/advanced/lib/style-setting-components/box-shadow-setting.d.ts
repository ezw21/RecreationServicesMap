/// <reference types="react" />
/** @jsx jsx */
import { React, IntlShape, jsx, ReactRedux, IMThemeVariables } from 'jimu-core';
import { BoxShadowStyle } from 'jimu-ui';
export interface BoxShadowSettingProps {
    className?: string;
    /**
     * Box shadow style, including offsetX, offsetY, blur, spread and color
     */
    value?: BoxShadowStyle;
    onChange?: (value: BoxShadowStyle) => void;
}
interface StateToProps {
    appTheme?: IMThemeVariables;
}
interface ExtraProps {
    intl: IntlShape;
}
export declare class _BoxShadowSetting extends React.PureComponent<BoxShadowSettingProps & StateToProps & ExtraProps> {
    static defaultProps: Partial<BoxShadowSettingProps & ExtraProps>;
    _updateShadow(key: string, newValue: any): void;
    translate: (id: string) => string;
    getShadows: () => {
        name: string;
        label: string;
        min: number;
        max: number;
    }[];
    render(): jsx.JSX.Element;
}
/**
 * A react component for setting box-shadow style (offsetX, offsetY, blur, spread and color)
 */
export declare const BoxShadowSetting: React.ComponentType<ReactRedux.Omit<import("react-intl").WithIntlProps<BoxShadowSettingProps & ExtraProps>, never> & BoxShadowSettingProps>;
export {};
