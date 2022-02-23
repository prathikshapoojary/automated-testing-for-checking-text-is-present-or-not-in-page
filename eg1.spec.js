const { test, expect } = require('@playwright/test');

//for opening unicourt.com and checking title of the page.
test('basic test 1', async ({ page }) => {

  //opening URL in browser
  await page.goto('URL');

  //locating title tag in web page
  const title = page.locator('element');

  //checking for content 
  await expect(title).toHaveText('text on page');

/* 
OR
   await page.goto('url');
   await expect(page).toHaveTitle(/text to check/);
*/    
    // to input text to inputbox
    await page.fill('#id','input value'); 

    // to click on button
    await page.locator(".class name").click();

    //to open top first case displayed in page
    await page.locator('a >> nth=26').click();
    
    // await page.fill('.input','input value'); 

   
});
