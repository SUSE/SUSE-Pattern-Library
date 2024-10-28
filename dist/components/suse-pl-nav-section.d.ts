import type { Components, JSX } from "../types/components";

interface SusePlNavSection extends Components.SusePlNavSection, HTMLElement {}
export const SusePlNavSection: {
    prototype: SusePlNavSection;
    new (): SusePlNavSection;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
