import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'suse-pl-nav-section',
  styleUrl: 'suse-pl-nav-section.css'
})
export class SusePlNavSection {
  @Prop() sectionTitle: string;

  render() {
    return (
      <section>
        <h1>
          { this.sectionTitle }
        </h1>
        <ul>
          <slot></slot>
        </ul>
      </section>
    );
  }
}
