import { newE2EPage } from '@stencil/core/testing';

describe('suse-pl-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<suse-pl-link></suse-pl-link>');

    const element = await page.find('suse-pl-link');
    expect(element).toHaveClass('hydrated');
  });
});
