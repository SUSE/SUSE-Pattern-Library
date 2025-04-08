import { newE2EPage } from '@stencil/core/testing';

describe('suse-pl-horizontal-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<suse-pl-horizontal-card></suse-pl-horizontal-card>');

    const element = await page.find('suse-pl-horizontal-card');
    expect(element).toHaveClass('hydrated');
  });
});
