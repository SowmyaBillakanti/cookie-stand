'use strict'

var storeInfo = document.getElementById('storeSales')

// To calculate random number of cookies purchased per hour
function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var salesHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


var seattleStore = {
    name: 'Seattle',
    minPerCust: 23,
    maxPerCust: 65,
    avgCookiesPerCust: 6.3,
    cookiesSoldPerHour: [],
    totalCookiesPerDay: 0,

    render: function() {
        for(var i = 0; i < salesHours.length; i++) {
            var li = document.createElement('li')
            li.textContent = salesHours[i] + ': ' + Math.round(getRandomInt(this.minPerCust, this.maxPerCust)* this.avgCookiesPerCust);
            
            console.log(this.totalCookiesPerDay += Math.round(getRandomInt(this.minPerCust, this.maxPerCust)* this.avgCookiesPerCust))
            storeInfo.appendChild(li);
        }
    }
}

console.log(storeInfo);
seattleStore.render();

var tokyoStore = {
    name: 'Tokyo',
    minPerCust: 3,
    maxPerCust: 24,
    avgCookiesPerCust: 1.2,

    render: function() {
        for(var i = 0; i < salesHours.length; i++) {
            var li = document.createElement('li')
            li.textContent = salesHours[i] + ': ' + Math.round(getRandomInt(this.minPerCust, this.maxPerCust)* this.avgCookiesPerCust);
            console.log(this.totalCookiesPerDay += Math.round(getRandomInt(this.minPerCust, this.maxPerCust)* this.avgCookiesPerCust))
            storeInfo.appendChild(li);
        }
    }
}

tokyoStore.render();

var dubaiStore = {
    name: 'Dubai',
    minPerCust: 11,
    maxPerCust: 38,
    avgCookiesPerCust: 3.7,

    render: function() {
        for(var i = 0; i < salesHours.length; i++) {
            var li = document.createElement('li')
            li.textContent = salesHours[i] + ': ' + Math.round(getRandomInt(this.minPerCust, this.maxPerCust)* this.avgCookiesPerCust);
            console.log(this.totalCookiesPerDay += Math.round(getRandomInt(this.minPerCust, this.maxPerCust)* this.avgCookiesPerCust))
            storeInfo.appendChild(li);
        }
    }
}

dubaiStore.render();


var parisStore = {
    name: 'Paris',
    minPerCust: 20,
    maxPerCust: 38,
    avgCookiesPerCust: 2.3,

    render: function() {
        for(var i = 0; i < salesHours.length; i++) {
            var li = document.createElement('li')
            li.textContent = salesHours[i] + ': ' + Math.round(getRandomInt(this.minPerCust, this.maxPerCust)* this.avgCookiesPerCust);
            console.log(this.totalCookiesPerDay += Math.round(getRandomInt(this.minPerCust, this.maxPerCust)* this.avgCookiesPerCust))
            storeInfo.appendChild(li);
        }
    }
}

parisStore.render();


var limaStore = {
    name: 'Lima',
    minPerCust: 2,
    maxPerCust: 16,
    avgCookiesPerCust: 4.6,

    render: function() {
        for(var i = 0; i < salesHours.length; i++) {
            var li = document.createElement('li')
            li.textContent = salesHours[i] + ': ' + Math.round(getRandomInt(this.minPerCust, this.maxPerCust)* this.avgCookiesPerCust);
            console.log(this.totalCookiesPerDay += Math.round(getRandomInt(this.minPerCust, this.maxPerCust)* this.avgCookiesPerCust))
            storeInfo.appendChild(li);
        }
    }
}

limaStore.render();
