import { Component, h } from '@stencil/core';

@Component({
  tag: 'site-router'
})
export class AppComponent {
  render() {
    return [
      <app-header title="Fancy Alligator!" />,

      <app-menu />,

      <stencil-router id="router">
        <stencil-route
          url="/"
          component="app-home"
          router="#router"
          exact={true}
        />
        <stencil-route
          url="/contact"
          component="app-contact"
          router="#router"
        />
        <stencil-route
          url="/about"
          component="app-about"
          router="#router"
        />
      </stencil-router>
    ];
  }
}
