import { newE2EPage } from '@stencil/core/testing';

describe('suse-pl-nav-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<suse-pl-nav-section></suse-pl-nav-section>');

    const element = await page.find('suse-pl-nav-section');
    expect(element).toHaveClass('hydrated');
  });
});
