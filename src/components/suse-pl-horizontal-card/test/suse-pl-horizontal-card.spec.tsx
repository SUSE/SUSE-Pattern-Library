import { newSpecPage } from '@stencil/core/testing';
import { SusePlHorizontalCard } from '../suse-pl-horizontal-card';

describe('suse-pl-horizontal-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SusePlHorizontalCard],
      html: `<suse-pl-horizontal-card></suse-pl-horizontal-card>`,
    });
    expect(page.root).toEqualHtml(`
      <suse-pl-horizontal-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </suse-pl-horizontal-card>
    `);
  });
});
