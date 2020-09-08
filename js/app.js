'use strict'

var storeInfo = document.getElementById('storeSales')

var salesHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


var seattleStore = {
    name: 'Seattle',
    minPerCust: 23,
    maxPerCust: 65,
    avgCookiesPerCust: 6.3,
    cookiesSoldPerHour: [],
    totalCookiesPerDay: 0,
    getRandomInt: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    render: function() {
        var storeName = document.createElement('h1')
        storeName.textContent = this.name
        storeInfo.appendChild(storeName)
        for(var i = 0; i < salesHours.length; i++) {
            var li = document.createElement('li')
            var cookies = Math.round(this.getRandomInt(this.minPerCust, this.maxPerCust)* this.avgCookiesPerCust)
            li.textContent = salesHours[i] + ': ' + cookies;
            this.cookiesSoldPerHour.push(cookies)
            console.log(this.totalCookiesPerDay += cookies);
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
    cookiesSoldPerHour: [],
    totalCookiesPerDay: 0,
    getRandomInt: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    render: function() {
        var storeName = document.createElement('h1')
        storeName.textContent = this.name
        storeInfo.appendChild(storeName)
        for(var i = 0; i < salesHours.length; i++) {
            var li = document.createElement('li')
            var cookies = Math.round(this.getRandomInt(this.minPerCust, this.maxPerCust)* this.avgCookiesPerCust)
            li.textContent = salesHours[i] + ': ' + cookies;
            this.cookiesSoldPerHour.push(cookies)
            console.log(this.totalCookiesPerDay += cookies);
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
    cookiesSoldPerHour: [],
    totalCookiesPerDay: 0,
    getRandomInt: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    render: function() {
        var storeName = document.createElement('h1')
        storeName.textContent = this.name
        storeInfo.appendChild(storeName)
        for(var i = 0; i < salesHours.length; i++) {
            var li = document.createElement('li')
            var cookies = Math.round(this.getRandomInt(this.minPerCust, this.maxPerCust)* this.avgCookiesPerCust)
            li.textContent = salesHours[i] + ': ' + cookies;
            this.cookiesSoldPerHour.push(cookies)
            console.log(this.totalCookiesPerDay += cookies);
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
    cookiesSoldPerHour: [],
    totalCookiesPerDay: 0,
    getRandomInt: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    render: function() {
        var storeName = document.createElement('h1')
        storeName.textContent = this.name
        storeInfo.appendChild(storeName)
        for(var i = 0; i < salesHours.length; i++) {
            var li = document.createElement('li')
            var cookies = Math.round(this.getRandomInt(this.minPerCust, this.maxPerCust)* this.avgCookiesPerCust)
            li.textContent = salesHours[i] + ': ' + cookies;
            this.cookiesSoldPerHour.push(cookies)
            console.log(this.totalCookiesPerDay += cookies);
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
    cookiesSoldPerHour: [],
    totalCookiesPerDay: 0,
    getRandomInt: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    render: function() {
        var storeName = document.createElement('h1')
        storeName.textContent = this.name
        storeInfo.appendChild(storeName)
        for(var i = 0; i < salesHours.length; i++) {
            var li = document.createElement('li')
            var cookies = Math.round(this.getRandomInt(this.minPerCust, this.maxPerCust)* this.avgCookiesPerCust)
            li.textContent = salesHours[i] + ': ' + cookies;
            this.cookiesSoldPerHour.push(cookies)
            console.log(this.totalCookiesPerDay += cookies);
            storeInfo.appendChild(li);
        }
    }
}

limaStore.render();
