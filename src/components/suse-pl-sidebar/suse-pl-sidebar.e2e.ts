import { newE2EPage } from '@stencil/core/testing';

describe('suse-pl-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<suse-pl-sidebar></suse-pl-sidebar>');
    const element = await page.find('suse-pl-sidebar');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<suse-pl-sidebar></suse-pl-sidebar>');
    const component = await page.find('suse-pl-sidebar');
    // const element = await page.find('suse-pl-sidebar >>> h1');
    // expect(element.textContent).toEqual(`suse-pl-sidebar`);
  });
});
