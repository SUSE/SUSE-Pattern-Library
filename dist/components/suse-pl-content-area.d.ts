import type { Components, JSX } from "../types/components";

interface SusePlContentArea extends Components.SusePlContentArea, HTMLElement {}
export const SusePlContentArea: {
    prototype: SusePlContentArea;
    new (): SusePlContentArea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
