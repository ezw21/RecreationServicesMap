/// <reference types="react" />
/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import { TargetType, Placement } from 'jimu-ui';
export interface QuickStylePopperProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    open?: boolean;
    reference: TargetType;
    onClose?: () => void;
    placement?: Placement;
    a11yVersion?: number;
}
export declare const QuickStylePopper: (props: QuickStylePopperProps) => jsx.JSX.Element;
