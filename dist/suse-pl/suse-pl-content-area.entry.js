import { r as registerInstance, h, a as Host } from './index-e900f1b4.js';

const susePlContentAreaCss = "suse-pl-content-area {\n  display: block;\n\n  padding: 2em 2em 2em calc(25vw + 2em);\n\n  h1 {\n    font-weight: 500;\n  }\n\n  h2 {\n    font-weight: 300;\n  }\n\n}\n";

const SusePlContentArea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '1b3758e275af1ff01ece2479b0e5c9da833cac1e' }, h("slot", { key: '6a13fea3fb66c5eac02449c07541675f9164e69f' })));
    }
};
SusePlContentArea.style = susePlContentAreaCss;

export { SusePlContentArea as suse_pl_content_area };

//# sourceMappingURL=suse-pl-content-area.entry.js.map