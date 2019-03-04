import { $, ElementFinder, browser , ExpectedConditions, element, by} from "protractor";
import { Constants } from "../stepdefinitions/Constants";

export class SearchPageObject {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;

    constructor() {
        this.searchTextBox = $(Constants.SEARCH_FORM).$(Constants.TEXT_BOX);
        this.searchButton = $(Constants.SEACH_BUTTON);
    }
}

export class CitiesListPageObject {
    public citiesTable: ElementFinder;
    public chosenCity: ElementFinder;

    constructor() {
        this.citiesTable = $(Constants.CITIES_LIST);
    }

    ChooseCityByID(cityID: string) {
        let partialHrefLink: string = Constants.CITY_ID_SEARCH_OPEN + cityID + Constants.CITY_ID_SEARCH_CLOSE;
        return this.citiesTable.$(partialHrefLink);
    }
}

export class ResultPageObject {
    public temparture: ElementFinder;

    constructor() {
        this.temparture = element(by.className('weather-widget__temperature'));
        //this.temparture = $(Constants.TEMPERATURE);
    }
    
    GetTemparture() {
        var EC = ExpectedConditions;
        browser.wait(EC.visibilityOf(this.temparture), 500000);
        return this.temparture;

      //  browser.wait(until.presenceOf(element(by.id('weather-widget'))), 300000, 'Element taking too long to appear in the DOM');
    }
}
