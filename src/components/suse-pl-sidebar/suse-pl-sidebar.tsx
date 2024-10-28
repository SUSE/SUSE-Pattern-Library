import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'suse-pl-sidebar',
  styleUrl: 'suse-pl-sidebar.css',
  assetsDirs: ['assets']
})
export class SusePlSidebar {
  @Prop() pageTitle: string;

  render() {
    return (
      <nav>
        <slot></slot>
      </nav>
    );
  }
}
