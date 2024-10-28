import { newSpecPage } from '@stencil/core/testing';
import { SusePlSidebar } from './suse-pl-sidebar';

describe('suse-pl-sidebar', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SusePlSidebar],
      html: '<suse-pl-sidebar></suse-pl-sidebar>',
    });
    expect(root).toEqualHtml(`
      <suse-pl-sidebar>
        <mock:shadow-root>
          <nav>
            <h1>
              suse-pl-sidebar
            </h1>
          <nav>
        </mock:shadow-root>
      </suse-pl-sidebar>
    `);
  });
});
