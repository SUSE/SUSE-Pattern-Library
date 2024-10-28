import type { Components, JSX } from "../types/components";

interface SusePlHeader extends Components.SusePlHeader, HTMLElement {}
export const SusePlHeader: {
    prototype: SusePlHeader;
    new (): SusePlHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
