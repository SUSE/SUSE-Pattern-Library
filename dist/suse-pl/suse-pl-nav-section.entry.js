import { r as registerInstance, h } from './index-e900f1b4.js';

const susePlNavSectionCss = ":host{display:block}";

const SusePlNavSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sectionTitle = undefined;
    }
    render() {
        return (h("section", { key: '02ea06dbd4e9196dc425de47e0145b303a53d72b' }, h("h1", { key: 'b853e8496d900d862882f0a592933cf2b504e269' }, this.sectionTitle), h("ul", { key: 'ca751cc0141c3cd7e5baf4d263d8fe6c6d4b331a' }, h("slot", { key: 'b2705325c70248a8d065eb08acceb18c2c17403b' }))));
    }
};
SusePlNavSection.style = susePlNavSectionCss;

export { SusePlNavSection as suse_pl_nav_section };

//# sourceMappingURL=suse-pl-nav-section.entry.js.map