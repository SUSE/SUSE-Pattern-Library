import { Component, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'suse-pl-button',
  styleUrl: 'suse-pl-button.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class SusePlButton {
  @Element() el: HTMLElement;

  suseRender(): boolean {
    return Boolean(this.el.closest('.suse-pl'));
  }

  render() {
    return (
      <Host>
        <button class={
          this.suseRender()
          ? 'suse-product suse-pl'
          : 'upstream'
        }>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
