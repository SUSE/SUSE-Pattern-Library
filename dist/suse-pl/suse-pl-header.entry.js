import { r as registerInstance, h, g as getAssetPath } from './index-e900f1b4.js';

const susePlHeaderCss = "suse-pl-header {\n  display: block;\n\n  & header {\n    background-color: var(--color-pine);\n    color: var(--color-fog);\n    position: fixed;\n    width: 100%;\n    font-size: 16px;\n    padding: 0.5em;\n\n    display: flex;\n    flex-wrap: nowrap;\n    flex-direction: row;\n    justify-content: space-between;\n\n    & h1 {\n      padding: 0.5em;\n      font-size: inherit;\n      font-family: \"SUSE\", sans-serif;\n      font-weight: 400;\n\n      & img#suse-logo {\n        height: 1em;\n        padding: 0.5em;\n        margin-right: 0.5em;\n        vertical-align: middle;\n        border-right: 2px solid var(--color-jungle);\n        display: inline-block;\n      }\n    }\n  }\n}\n";

const SusePlHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.pageTitle = undefined;
    }
    render() {
        return (h("header", { key: '49d552d29caa86f4a96625ce4542b43d463954a0' }, h("h1", { key: '5f1c25767f4d7c32af5d55227e4ca82c4bb45526' }, h("img", { key: '0e9152459f029fe8a3c6d535b8c28456d1daba96', id: "suse-logo", src: getAssetPath(`./assets/suse-hor-neg.svg`) }), this.pageTitle), h("slot", { key: '90bd5e0e182ccb21d5381f4691becd8a2c5a14d3' })));
    }
    static get assetsDirs() { return ["assets"]; }
};
SusePlHeader.style = susePlHeaderCss;

export { SusePlHeader as suse_pl_header };

//# sourceMappingURL=suse-pl-header.entry.js.map