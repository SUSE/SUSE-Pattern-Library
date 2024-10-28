import { newE2EPage } from '@stencil/core/testing';

describe('suse-pl-content-area', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<suse-pl-content-area></suse-pl-content-area>');

    const element = await page.find('suse-pl-content-area');
    expect(element).toHaveClass('hydrated');
  });
});
