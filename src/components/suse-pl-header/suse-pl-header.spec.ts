import { newSpecPage } from '@stencil/core/testing';
import { SusePlHeader } from './suse-pl-header';

describe('suse-pl-header', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SusePlHeader],
      html: '<suse-pl-header></suse-pl-header>',
    });
    expect(root).toEqualHtml(`
      <suse-pl-header>
        <mock:shadow-root>
          <header>
            <h3>
            </h3>
          </header>
        </mock:shadow-root>
      </suse-pl-header>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SusePlHeader],
      html: `<suse-pl-header page-title="Hello, World"></suse-pl-header>`,
    });
    expect(root).toEqualHtml(`
      <suse-pl-header page-title="Hello, World">
        <mock:shadow-root>
          <header>
            <h3>
              Hello, World!
            </h3>
          </header>
        </mock:shadow-root>
      </suse-pl-header>
    `);
  });
});
