import { r as registerInstance, h } from './index-e900f1b4.js';

const susePlSidebarCss = "suse-pl-sidebar {\n  display: block;\n  padding-top: 60px;\n\n  & nav {\n    float: left;\n    height: 100%;\n    min-height: 100vh;\n    width: 25vw;\n\n\n    font-family: \"SUSE\", sans-serif;\n    background-color: var(--color-white);\n    color: var(--color-pine);\n    font-size: 20px;\n\n    & section {\n      padding: 2em 2em 0;\n\n      & h1 {\n        font-size: inherit;\n        font-weight: 500;\n        border-bottom: 1px solid var(--color-fog);\n        margin-bottom: 0.5em !important;\n      }\n\n      & a {\n        text-decoration: none;\n        color: inherit;\n\n        &:hover {\n          color: var(--color-persimmon);\n        }\n\n        &:active {\n          color: var(--color-jungle);\n        }\n\n        &.active {\n          color: var(--color-jungle);\n        }\n      }\n\n      & ul {\n        list-style: none;\n        padding-left: 0;\n        display: flex;\n        flex-direction: column;\n        line-height: 1.75;\n        font-size: smaller;\n        font-weight: 200;\n\n        & li, & a {\n          display: inline-block;\n\n          & ul {\n            padding-left: 1em !important;\n          }\n\n          &.disabled {\n            color: var(--color-fog-5);\n            cursor: not-allowed;\n          }\n        }\n      }\n    }\n  }\n}\n";

const SusePlSidebar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.pageTitle = undefined;
    }
    render() {
        return (h("nav", { key: 'f3c3ebca75d18cea878fc1891f8dc323f8511f77' }, h("slot", { key: 'e00f6c9efa7f3701b58f8f20808b6323f9618877' })));
    }
    static get assetsDirs() { return ["assets"]; }
};
SusePlSidebar.style = susePlSidebarCss;

export { SusePlSidebar as suse_pl_sidebar };

//# sourceMappingURL=suse-pl-sidebar.entry.js.map