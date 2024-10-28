import { r as registerInstance, h } from './index-e900f1b4.js';

const susePlHorizontalCardCss = "suse-pl-horizontal-card {\n  & article {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    padding: 1em;\n    overflow: scroll;\n\n    & header {\n      display: inline-block;\n      padding: 0 1em;\n      border-right: 1px solid;\n\n      & h1 {\n        font-size: 20px;\n        font-weight: 400;\n      }\n\n      & h2 {\n        font-size: 14px;\n        font-weight: 200;\n        line-height: 1.5;\n      }\n    }\n\n    & section {\n      display: inline-block;\n      padding: 0 1em;\n      font-size: 90%;\n      font-weight: 200;\n\n      & dl {\n        display: grid;\n        grid-template-columns: max-content auto;\n        & dt {\n          grid-column-start: 1;\n          font-weight: 400;\n          white-space: nowrap;\n          border-bottom: 1px solid var(--color-fog-5);\n          padding-right: 0.5em;\n        }\n        & dd {\n          grid-column-start: 2;\n          display: inline-block;\n          white-space: nowrap;\n          border-bottom: 1px solid var(--color-fog-5);\n        }\n      }\n    }\n  }\n}\n";

const SusePlHorizontalCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.backgroundColor = undefined;
        this.color = undefined;
        this.cardTitle = undefined;
        this.cardSubtitle = undefined;
    }
    render() {
        return (h("article", { key: 'b1b2f25f22f5221856092a21efc476539e4aeb53', style: {
                'background-color': this.backgroundColor,
                'color': this.color
            } }, h("header", { key: 'be99f72f419d016bb350407261d7d9c836d77467' }, h("h1", { key: '23b0695771d6fcc7675d64a7f7c4f50b4bac6794' }, this.cardTitle), h("h2", { key: '5fd13010974b06c06bbae8651a867e278089de19' }, this.cardSubtitle)), h("slot", { key: '14f72d41e2472521efc15e382eb9f1ca6dcbe5bc' })));
    }
};
SusePlHorizontalCard.style = susePlHorizontalCardCss;

export { SusePlHorizontalCard as suse_pl_horizontal_card };

//# sourceMappingURL=suse-pl-horizontal-card.entry.js.map