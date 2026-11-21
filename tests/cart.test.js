import { test, expect } from '@playwright/test';

test('user can view product in cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Add product
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    // Open cart
    await page.locator('.shopping_cart_link').click();

    // Verify cart page
    await expect(page).toHaveURL(/cart/);

    // Verify product is in cart
    await expect(page.locator('.inventory_item_name'))
        .toHaveText('Sauce Labs Backpack');

});


test('user can remove product from cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Add product
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    // Open cart
    await page.locator('.shopping_cart_link').click();

    // Remove product
    await page.locator('#remove-sauce-labs-backpack').click();

    // Verify cart is empty
    await expect(page.locator('.shopping_cart_badge'))
        .not.toBeVisible();

});