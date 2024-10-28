import type { Components, JSX } from "../types/components";

interface SiteRouter extends Components.SiteRouter, HTMLElement {}
export const SiteRouter: {
    prototype: SiteRouter;
    new (): SiteRouter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
