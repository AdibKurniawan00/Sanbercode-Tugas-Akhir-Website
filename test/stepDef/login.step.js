const { Given, When, Then} = require ("@wdio/cucumber-framework")
const Page = require ("../pages/page")
const loginPage = require("../pages/login.page")
const dashnoardPage = require("../pages/dashnoard.page")

Given(/^I open kasiraja website$/, async()=>{
    await Page.open('/')
})

When(/^I login with valid credentials$/, async()=>{
    await loginPage.login('tokokita@mail.com', 'admin123')
})

Then(/^I should be on the dashboard page$/, async()=>{
    await dashnoardPage.assertDashboardUrl()
})

When(/^I login with invalid credentials$/, async()=>{
    await loginPage.login('tokokita@mail.com', 'invalidpass')
})

Then(/^I should see error message$/, async ()=>{
    await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah')
})