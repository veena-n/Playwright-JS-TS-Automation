import { expect, type Page } from '@playwright/test';

export class InventoryPage {
  readonly title;

  constructor(private readonly page: Page) {
    this.title = page.getByTestId('title');
  }

  async expectVisible(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.title).toHaveText('Products');
  }
}