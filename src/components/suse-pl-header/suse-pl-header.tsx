import { Component, Prop, Host, Element, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'suse-pl-header',
  styleUrl: 'suse-pl-header.css',
  shadow: true,
  assetsDirs: ['assets']

})
export class SusePlHeader {
  @Prop() pageTitle: string;
  @Prop() logoSrc?: string;
  @Element() el: HTMLElement;

  suseRender(): boolean {
    return Boolean(this.el.closest('.suse-pl'));
  }

  render() {
    return (
      <Host>
        <header class={
          this.suseRender()
          ? 'suse-product suse-pl'
          : 'upstream'
        }>
          <h1>
            <img id="logo" src={ this.logoSrc }></img>
            { this.pageTitle }
          </h1>
          <slot></slot>
        </header>
      </Host>
    );
  }
}
