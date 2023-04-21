import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.getByPlaceholder('email@example.com').click();
  await page.getByPlaceholder('email@example.com').fill('srikanth.dasari.88@gmail.com');
  await page.getByPlaceholder('email@example.com').press('Tab');
  await page.getByPlaceholder('enter your passsword').press('CapsLock');
  await page.getByPlaceholder('enter your passsword').fill('S');
  await page.getByPlaceholder('enter your passsword').press('CapsLock');
  await page.getByPlaceholder('enter your passsword').fill('Sriyank@1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'View' }).first().click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: ' Cart 1' }).click();
  await page.getByRole('button', { name: 'Sign Out' }).click();
});