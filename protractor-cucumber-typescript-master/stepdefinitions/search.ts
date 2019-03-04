import { browser, protractor } from "protractor";
import { SearchPageObject, CitiesListPageObject, ResultPageObject } from "../pages/searchPage";

const { Given, When, Then, defineSupportCode } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const homePage: SearchPageObject = new SearchPageObject();
const CitiesListResult: CitiesListPageObject = new CitiesListPageObject();
const result: ResultPageObject = new ResultPageObject();
defineSupportCode(function ({ setDefaultTimeout }) { setDefaultTimeout(10 * 5000); });



Given(/^I am on "(.*)" home page$/, async (text) => {
    if (text === "openweathermap") {
        browser.get('https://openweathermap.org/');
    }
});

When(/^I type "(.*)" name, in the search box$/, async (text) => {
    homePage.searchTextBox.click();
    await homePage.searchTextBox.sendKeys(text);
});

When(/^I click on the search button$/, async () => {
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
});

When(/^I choose the relevant city from the list, verfiy it by known unique city "(.*)"$/,{timeout: 10 * 9000}, async (cityID) => {
    let city = CitiesListResult.ChooseCityByID(cityID);
    await city.click();
});

Then('I expect city temperature will be at least zero celsius degrees',{timeout: 10 * 80000}, async () => {
    await result.GetTemparture().getText().then((text) => {
        let temperature = parseInt(text);
        console.log(":" + temperature);
        expect(temperature).to.be.at.least(0);
    });
});



