'use strict'

var salesHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var totalCookiesThisHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var tableElement = document.getElementById('sales-table');

function Store (cityName, minPerCust, maxPerCust, avgCookiesPerCust, cookiesSoldPerHour) {
    this.cityName = cityName;
    this.minPerCust = minPerCust;
    this.maxPerCust = maxPerCust;
    this.avgCookiesPerCust = avgCookiesPerCust;
    this.cookiesSoldPerHour = cookiesSoldPerHour;
    this.totalNumOfCookiesPerHour = function () {
    return Math.floor(Math.random() * (this.maxPerCust - this.minPerCust + 1)) + this.minPerCust;
    }
}

Store.prototype.render = function () {
    // create row for city
    var rowElement = document.createElement('tr');
    document.getElementById('sales-table').appendChild(rowElement)

    // create first cell for city
    var firstCellElement = document.createElement('td');
    firstCellElement.textContent = this.cityName
    rowElement.appendChild(firstCellElement);

    // calculate cookies for every hour
    var totalNumOfCookiesForCity = 0;
    for (var i = 0; i < salesHours.length; i++) {
        
        // calculate cookies for this hour
        var cellElement = document.createElement('td');
        var cookiesThisHour = Math.round(this.totalNumOfCookiesPerHour(this.minPerCust, this.maxPerCust) * this.avgCookiesPerCust);
        cellElement.textContent = cookiesThisHour;
        rowElement.appendChild(cellElement);

        // update totals
        totalNumOfCookiesForCity += cookiesThisHour;
        totalCookiesThisHour[i] = totalCookiesThisHour[i] + cookiesThisHour
    }

    // calculate total cookies for this city
    var total = document.createElement('td');
    total.textContent = totalNumOfCookiesForCity;
    rowElement.appendChild(total);
}

function createHeader() {
    // create row for header
    var headerRowElement = document.createElement('tr');
    tableElement.appendChild(headerRowElement);

    // create first empty cell for header
    var emptyCellElement = document.createElement('td')
    headerRowElement.appendChild(emptyCellElement)

    // create each cell for header
    for (var j = 0; j < salesHours.length; j++) {
        var headerCellElement = document.createElement('td')
        headerCellElement.textContent = salesHours[j]
        headerCellElement.style.fontWeight = 'bold'
        headerRowElement.appendChild(headerCellElement)
    }

    // create last cell for header
    var lastHeaderCellElement = document.createElement('td')
    lastHeaderCellElement.textContent = "Daily Location Total"
    lastHeaderCellElement.style.fontWeight = 'bold'
    headerRowElement.appendChild(lastHeaderCellElement)
}

function createFooter() {
    // create footer row
    var footerRowElement = document.createElement('tr')
    tableElement.appendChild(footerRowElement)

    // crate first footer cell
    var footerFirstCellElement = document.createElement('td')
    footerFirstCellElement.textContent = 'Totals'
    footerRowElement.appendChild(footerFirstCellElement)

    // Calculate total for all locations per hour
    var grandTotal = 0
    for (var x = 0; x < salesHours.length; x++) {
        var firstFooterCellElement = document.createElement('td')
        firstFooterCellElement.textContent = totalCookiesThisHour[x]
        footerRowElement.appendChild(firstFooterCellElement)
        grandTotal += totalCookiesThisHour[x]
    }

    // Calculate grand total
    var lastFooterCellElement = document.createElement('td')
    lastFooterCellElement.textContent = grandTotal
    footerRowElement.appendChild(lastFooterCellElement)
}

// Actual execution
createHeader()

var Seattle = new Store ('Seattle', 23, 65, 6.3, []);
var Tokyo = new Store ('Tokyo', 3, 24, 1.2, []);
var Dubai = new Store ('Dubai', 11, 38, 3.7, []);
var Paris = new Store ('Paris', 20, 38, 2.3, []);
var Lima = new Store ('Lima', 2, 16, 4.6, []);

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

createFooter()
