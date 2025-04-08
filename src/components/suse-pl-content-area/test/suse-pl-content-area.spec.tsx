import { newSpecPage } from '@stencil/core/testing';
import { SusePlContentArea } from '../suse-pl-content-area';

describe('suse-pl-content-area', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SusePlContentArea],
      html: `<suse-pl-content-area></suse-pl-content-area>`,
    });
    expect(page.root).toEqualHtml(`
      <suse-pl-content-area>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </suse-pl-content-area>
    `);
  });
});
