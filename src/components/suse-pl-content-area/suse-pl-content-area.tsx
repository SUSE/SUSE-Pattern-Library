import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'suse-pl-content-area',
  styleUrl: 'suse-pl-content-area.css'
})

export class SusePlContentArea {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
