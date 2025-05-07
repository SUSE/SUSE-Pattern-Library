import { newSpecPage } from '@stencil/core/testing';
import { SusePlLink } from '../suse-pl-link';

describe('suse-pl-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SusePlLink],
      html: `<suse-pl-link></suse-pl-link>`,
    });
    expect(page.root).toEqualHtml(`
      <suse-pl-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </suse-pl-link>
    `);
  });
});
