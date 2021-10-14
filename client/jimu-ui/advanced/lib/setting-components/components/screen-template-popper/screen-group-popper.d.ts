/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IMThemeVariables } from 'jimu-core';
export interface ScreenGroupTemplatePopperProps {
    theme: IMThemeVariables;
    referenceElement: HTMLElement;
    onItemSelect: (item: any) => void;
    onClose: () => void;
}
interface State {
    open: boolean;
}
export declare class ScreenGroupTemplatePopper extends React.PureComponent<ScreenGroupTemplatePopperProps, State> {
    contentRef: HTMLElement;
    constructor(props: any);
    getStyle(): import("jimu-core").SerializedStyles;
    togglePopper: () => void;
    render(): jsx.JSX.Element;
}
export {};
