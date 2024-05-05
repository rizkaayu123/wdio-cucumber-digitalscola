import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ , browser } from '@wdio/globals'

Given("user is on sauce-demo page", async() => {
    await browser.url("https://www.saucedemo.com/")
})

When(/^user input username with"(.*)"$/, async (username) => {
       await browser.$('#user-name').setValue(username)
});

When(/^user input password with"(.*)"$/, async (password) => {
    await browser.$('#password').setValue(password)
});

When(/^User Clik Button$/, async () => {
    (await browser.$('#login-button')).click()
});

Then(/^user sholud redirect to homepage$/, async () => {
    const pageText = await browser.$('body');
    expect (pageText).toHaveTextContaining("Sauce Labs Backpack")
});