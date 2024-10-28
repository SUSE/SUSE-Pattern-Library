import { r as registerInstance, h } from './index-e900f1b4.js';

const AppComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("app-header", { key: 'a93a16b54ad9ec5370a3dd3c0dade3577988b640', title: "Fancy Alligator!" }),
            h("app-menu", { key: '12fdd342cdd838b7e424ed8ebc1f63fd659a210d' }),
            h("stencil-router", { key: '3567a2e4fe2c61d9c751bac7e825cef517d5b699', id: "router" }, h("stencil-route", { key: '61679b558cb2f98707fdd5c5117da585c181b48c', url: "/", component: "app-home", router: "#router", exact: true }), h("stencil-route", { key: 'cf2cf0cabdf5b6288575515cc7b680981c4c5b64', url: "/contact", component: "app-contact", router: "#router" }), h("stencil-route", { key: '00d9eb04dc91719e5d614a92785eea1a9545c278', url: "/about", component: "app-about", router: "#router" }))
        ];
    }
};

export { AppComponent as site_router };

//# sourceMappingURL=site-router.entry.js.map