import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.weekendtesting.com/');
  await page.getByRole('link', { name: 'About Us' }).click();
  await page.getByText('Accessibility Testing').click();
  await page.getByText('Test Design').click();
  await page.getByRole('link', { name: 'Transcript' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'View TranscriptRegister for' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://us05web.zoom.us/meeting/register/BmZuogf6Q2qGqcTRWx8dyg#/registration');
  await page.getByRole('heading', { name: 'FeedLog-User Feedback' }).click();
  await page.getByRole('img', { name: 'FeedLog-User Feedback' }).click();await page.goto('https://www.moolya.com/');
  await page.getByRole('navigation', { name: 'About Us' }).getByRole('link', { name: 'Our Customers' }).click();
});