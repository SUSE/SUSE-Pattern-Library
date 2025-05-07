import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'suse-pl-link',
  styleUrl: 'suse-pl-link.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class SusePlLink {
  @Prop() type: 'normal' | 'title' | 'topmenu' = 'normal';
  @Prop() url: string;

  /**
   *  The image path for the icon when the link type is `topmenu`
   */
  @Prop() icon: string;

  render() {
    const ClassMap = {
      "type-normal": this.type === "normal",
      "type-title": this.type === "title",
      "type-topmenu": this.type === "topmenu",
    }

    return (
      <Host>
        <div>
          {this.type == 'topmenu' && this.icon &&
            <img src={this.icon} alt="icon" class="icon" />
          }
          <a href={this.url} class={ClassMap}>
            <slot></slot>
          </a>
        </div>
      </Host>
    );
  }
}
