import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'suse-pl-horizontal-card',
  styleUrl: 'suse-pl-horizontal-card.css'
})
export class SusePlHorizontalCard {
  @Prop() backgroundColor: string;
  @Prop() color: string;
  @Prop() cardTitle: string;
  @Prop() cardSubtitle: string;


  render() {
    return (
      <article style={{
        'background-color': this.backgroundColor,
        'color': this.color
      }}>
        <header>
          <h1>{this.cardTitle}</h1>
          <h2>{this.cardSubtitle}</h2>
        </header>
        <slot></slot>
      </article>
    );
  }
}
