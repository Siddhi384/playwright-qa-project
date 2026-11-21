import { test, expect } from '@playwright/test';

test('user can login and view products', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');

});


test('user cannot login with invalid credentials', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('wrong_user');
    await page.locator('#password').fill('wrong_password');
    await page.locator('#login-button').click();

    await expect(page.locator('[data-test="error"]'))
        .toBeVisible();

});


test('user cannot login with empty username', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page.locator('[data-test="error"]'))
        .toBeVisible();

});


test('user cannot login with empty password', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#login-button').click();

    await expect(page.locator('[data-test="error"]'))
        .toBeVisible();

});