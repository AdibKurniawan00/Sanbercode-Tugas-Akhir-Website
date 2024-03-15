const { Given, When, Then } = require ("@wdio/cucumber-framework")
const Page = require ("../pages/page");
const loginPage = require("../pages/login.page");
const categoryPage = require("../pages/category.page")


Given(/^I login use valid credentials$/,async ()=>{
    await Page.open('/')
    await loginPage.login('tokokita@mail.com','admin123')
})

When(/^I go to add category page$/,async ()=>{
    await categoryPage.directCategoryPage()
})

Then(/^I add category$/,async ()=>{
    await categoryPage.addCategory('kategori 1', 'ini deskripsi nya ya')
})

Then(/^I should see the category$/,async ()=>{
    await categoryPage.assertAddedCategory('kategori 1')
})