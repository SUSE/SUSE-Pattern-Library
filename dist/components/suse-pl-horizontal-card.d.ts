import type { Components, JSX } from "../types/components";

interface SusePlHorizontalCard extends Components.SusePlHorizontalCard, HTMLElement {}
export const SusePlHorizontalCard: {
    prototype: SusePlHorizontalCard;
    new (): SusePlHorizontalCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
