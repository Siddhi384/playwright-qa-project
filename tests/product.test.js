import { test, expect } from '@playwright/test';

test('user can add a product to cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});


test('product displays the correct price', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page.locator('.inventory_item_price').first())
        .toHaveText('$29.99');

});