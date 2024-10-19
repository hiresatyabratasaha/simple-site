import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Create Next App");
});

test('get started link', async ({ context }) => { 

  const page = await context.newPage();

  await page.goto('http://localhost:3000/');

  
  const pagePromise = context.waitForEvent('page');

  await page.getByTestId("deploy-button").click();

  const newPage = await pagePromise;

  // const loginPagePromise = context.waitForEvent('page');

  await newPage.getByText("Login").click();

  // const loginPage = await loginPagePromise;

  console.log(await newPage.title())



  // await expect(newPage).toHaveTitle("Login – Vercel");

  

  // Expects page to have a heading with the name of Installation.
  // await expect(newPage.getByText('Login')).toBeVisible();
});
