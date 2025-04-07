import { newSpecPage } from '@stencil/core/testing';
import { SusePlButton } from '../suse-pl-button';

describe('suse-pl-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SusePlButton],
      html: `<suse-pl-button></suse-pl-button>`,
    });
    expect(page.root).toEqualHtml(`
      <suse-pl-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </suse-pl-button>
    `);
  });
});
