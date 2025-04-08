import { Component, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'suse-pl-content-area',
  styleUrl: 'suse-pl-content-area.css'
})

export class SusePlContentArea {
  @Element() el: HTMLElement;

  suseRender(): boolean {
    return Boolean(this.el.closest('.suse-pl'));
  }

  render() {
    return (
      <Host>
        <div class={
          this.suseRender()
          ? 'content-area suse-product'
          : 'content-area upstream'
        }>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
