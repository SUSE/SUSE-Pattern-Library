import { newSpecPage } from '@stencil/core/testing';
import { SusePlNavSection } from '../suse-pl-nav-section';

describe('suse-pl-nav-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SusePlNavSection],
      html: `<suse-pl-nav-section></suse-pl-nav-section>`,
    });
    expect(page.root).toEqualHtml(`
      <suse-pl-nav-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </suse-pl-nav-section>
    `);
  });
});
