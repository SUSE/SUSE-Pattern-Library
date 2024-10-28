import { Component, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'suse-pl-header',
  styleUrl: 'suse-pl-header.css',
  assetsDirs: ['assets']
})
export class SusePlHeader {
  @Prop() pageTitle: string;

  render() {
    return (
      <header>
        <h1>
          <img id="suse-logo" src={ getAssetPath(`./assets/suse-hor-neg.svg`) }></img>
          { this.pageTitle }
        </h1>
        <slot></slot>
      </header>
    );
  }
}
