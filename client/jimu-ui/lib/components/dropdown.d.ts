/// <reference types="react" />
import { React } from 'jimu-core';
/** Type for the `direction` prop of the Dropdown component. */
export declare type Direction = 'up' | 'down' | 'left' | 'right';
/**
 * The Dropdown component props.
 *
 * Inherits properties from the `HTMLElement`.
 *
 * See [additional props available from HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement).
 */
export interface DropdownProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
    /**
     * A callback function when the dropdown is toggled.
     */
    toggle?: (e: any) => void;
    /**
     * If `true`, the dropdown will span the full width of its parent container.
     */
    fluid?: boolean;
    /**
     * If `true`, the dropdown will appear as opened.
     * Utilize this property to make the dropdown as a controlled component.
     */
    isOpen?: boolean;
    /**
     * Tells the dropdown that it is wrapped within a `Nav` component.
     * If `true`, `\<li\>` element will be used as the container of the component.
     */
    nav?: boolean;
    /**
     * Tells the dropdown that it is wrapped within a `Navbar` component.
     */
    inNavbar?: boolean;
    /**
     * Tells the dropdown that it is wrapped within a `DropdownMenu` component as a sub-menu item.
     */
    isSubMenuItem?: boolean;
    /**
     * If `true`, the dropdown will be disabled.
     */
    disabled?: boolean;
    /**
     * Determines the direction and location of the dropdown menu according to its anchor (dropdown button).
     */
    direction?: Direction;
    /**
     * Defines the size of the dropdown button. The button will take the default size if the value is `undefined`.
     * @default default
     */
    size?: 'default' | 'sm' | 'lg';
    /**
     * The role of dropdown menu: `listbox`, or `menu`
     * @default menu
     */
    menuRole?: 'menu' | 'listbox';
    /**
     * Custom html element to be used for the container.
     * @default div
     */
    tag?: React.ReactType;
    /**
     * If `true`, the min-width of the dropdown menu will be automatically calculated to equal the width of the container.
     */
    autoWidth?: boolean;
    /**
     * If `true` or defined, the active dropdown item in the dropdown menu will show a check icon in front of the text.
     * The icon can be customized by providing with a different element, such as:
     * `<Icon icon={require('path.to.icon.svg')}/>` or `<span>⭐️</span>`.
     */
    activeIcon?: boolean | React.ReactElement;
}
interface DropdownState {
    isOpen: boolean;
}
/**
 * The `Dropdown` component displays a list of choices on temporary surfaces.
 *
 * Please use this component together with `DropdownButton`, `DropdownMenu` and `DropdownItem`.
 *
 * ```ts
 * import { Dropdown } from 'jimu-ui'
 * ```
 */
export declare class _Dropdown extends React.PureComponent<DropdownProps, DropdownState> {
    containerRef: React.RefObject<HTMLElement>;
    menuRef: React.RefObject<HTMLElement>;
    _menuCtrl: any;
    private _minMenuWidth;
    static defaultProps: Partial<DropdownProps>;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    handleProps(): void;
    getContainer(): HTMLElement;
    getMenu(): HTMLElement;
    getMenuCtrl(): any;
    getItemType(): "option" | "menuitem";
    getMenuItems(): any;
    addEvents(): void;
    removeEvents(): void;
    handleDocumentClick(e: any): void;
    handleKeyDown(e: any): void;
    toggle(e: any): any;
    render(): JSX.Element;
}
/**
 * The `Dropdown` component displays a list of choices on temporary surfaces.
 * Please use this component together with DropdownButton, DropdownMenu and DropdownItem.
 *
 * ```ts
 * import { Dropdown } from 'jimu-ui'
 * ```
 */
export declare const Dropdown: React.ComponentType<DropdownProps>;
export declare class _DropdownSubMenuItem extends _Dropdown {
}
export declare const DropdownSubMenuItem: React.ComponentType<DropdownProps>;
export {};
