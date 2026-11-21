import { test, expect } from '@playwright/test';

test('user can complete checkout', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Add product
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    // Open cart
    await page.locator('.shopping_cart_link').click();

    // Start checkout
    await page.locator('#checkout').click();

    // Enter customer information
    await page.locator('#first-name').fill('Siddhi');
    await page.locator('#last-name').fill('Test');
    await page.locator('#postal-code').fill('411001');

    // Continue
    await page.locator('#continue').click();

    // Finish order
    await page.locator('#finish').click();

    // Verify successful order
    await expect(page.locator('.complete-header'))
        .toHaveText('Thank you for your order!');

});