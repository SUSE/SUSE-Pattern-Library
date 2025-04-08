import { newE2EPage } from '@stencil/core/testing';

describe('suse-pl-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<suse-pl-header></suse-pl-header>');
    const element = await page.find('suse-pl-header');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<suse-pl-header></suse-pl-header>');
    const component = await page.find('suse-pl-header');
    const element = await page.find('suse-pl-header >>> h3');
    expect(element.textContent).toEqual(``);

    component.setProperty('page-title', 'Hello, World');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World`);
  });
});
