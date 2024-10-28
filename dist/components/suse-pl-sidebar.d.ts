import type { Components, JSX } from "../types/components";

interface SusePlSidebar extends Components.SusePlSidebar, HTMLElement {}
export const SusePlSidebar: {
    prototype: SusePlSidebar;
    new (): SusePlSidebar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
