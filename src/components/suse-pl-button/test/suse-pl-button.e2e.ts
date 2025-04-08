import { newE2EPage } from '@stencil/core/testing';

describe('suse-pl-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<suse-pl-button></suse-pl-button>');

    const element = await page.find('suse-pl-button');
    expect(element).toHaveClass('hydrated');
  });
});
