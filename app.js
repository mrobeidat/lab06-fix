'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let Seattle = {

    location: 'seattle',
    minCus: 23,
    maxCus: 65,
    avgCookies: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calCustomersEachHour: function () {

        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.minCus, this.maxCus))

        }
    },



    calCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));


            this.total += this.cookiesEachHour[i];
        }

    },


    render: function () {

        let parent = document.getElementById('parent');
        console.log(parent);

        let h2Element = document.createElement('h2');
        console.log(h2Element);

        parent.appendChild(h2Element);

        h2Element.textContent = (this.location);


        let ulElemnt = document.createElement('ul');

        parent.appendChild(ulElemnt);

        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');


            ulElemnt.appendChild(liElement);


            liElement.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`
        }

        let totalElement = document.createElement('li');


        ulElemnt.appendChild(totalElement);


        totalElement.textContent = `Total : ${this.total} Cookies`

    }
}
Seattle.calCustomersEachHour();
Seattle.calCookiesEachHour();
Seattle.render();







let Tokyo = {

    location: 'Tokyo',
    minCus: 3,
    maxCus: 24,
    avgCookies: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calCustomersEachHour: function () {

        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.minCus, this.maxCus))

        }
    },



    calCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));


            this.total += this.cookiesEachHour[i];
        }

    },


    render: function () {

        let parent = document.getElementById('parent');
        console.log(parent);

        let h2Element = document.createElement('h2');
        console.log(h2Element);

        parent.appendChild(h2Element);

        h2Element.textContent = (this.location);


        let ulElemnt = document.createElement('ul');

        parent.appendChild(ulElemnt);

        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');


            ulElemnt.appendChild(liElement);


            liElement.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`
        }

        let totalElement = document.createElement('li');


        ulElemnt.appendChild(totalElement);


        totalElement.textContent = `Total : ${this.total} Cookies`

    }
}
Tokyo.calCustomersEachHour();
Tokyo.calCookiesEachHour();
Tokyo.render();





let Dubai = {

    location: 'Dubai',
    minCus: 11,
    maxCus: 38,
    avgCookies: 8.7,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calCustomersEachHour: function () {

        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.minCus, this.maxCus))

        }
    },



    calCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));


            this.total += this.cookiesEachHour[i];
        }

    },


    render: function () {

        let parent = document.getElementById('parent');
        console.log(parent);

        let h2Element = document.createElement('h2');
        console.log(h2Element);

        parent.appendChild(h2Element);

        h2Element.textContent = (this.location);


        let ulElemnt = document.createElement('ul');

        parent.appendChild(ulElemnt);

        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');


            ulElemnt.appendChild(liElement);


            liElement.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`
        }

        let totalElement = document.createElement('li');


        ulElemnt.appendChild(totalElement);


        totalElement.textContent = `Total : ${this.total} Cookies`

    }
}
Dubai.calCustomersEachHour();
Dubai.calCookiesEachHour();
Dubai.render();



let Paris = {

    location: 'Paris',
    minCus: 20,
    maxCus: 38,
    avgCookies: 2.3,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calCustomersEachHour: function () {

        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.minCus, this.maxCus))

        }
    },



    calCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));


            this.total += this.cookiesEachHour[i];
        }

    },


    render: function () {

        let parent = document.getElementById('parent');
        console.log(parent);

        let h2Element = document.createElement('h2');
        console.log(h2Element);

        parent.appendChild(h2Element);

        h2Element.textContent = (this.location);


        let ulElemnt = document.createElement('ul');

        parent.appendChild(ulElemnt);

        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');


            ulElemnt.appendChild(liElement);


            liElement.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`
        }

        let totalElement = document.createElement('li');


        ulElemnt.appendChild(totalElement);


        totalElement.textContent = `Total : ${this.total} Cookies`

    }
}
Paris.calCustomersEachHour();
Paris.calCookiesEachHour();
Paris.render();




let Lima = {

    location: 'Lima',
    minCus: 2,
    maxCus: 16,
    avgCookies: 4.6,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calCustomersEachHour: function () {

        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.minCus, this.maxCus))

        }
    },



    calCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));


            this.total += this.cookiesEachHour[i];
        }

    },


    render: function () {

        let parent = document.getElementById('parent');
        console.log(parent);

        let h2Element = document.createElement('h2');
        console.log(h2Element);

        parent.appendChild(h2Element);

        h2Element.textContent = (this.location);


        let ulElemnt = document.createElement('ul');

        parent.appendChild(ulElemnt);

        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');


            ulElemnt.appendChild(liElement);


            liElement.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`
        }

        let totalElement = document.createElement('li');


        ulElemnt.appendChild(totalElement);


        totalElement.textContent = `Total : ${this.total} Cookies`

    }
}
Lima.calCustomersEachHour();
Lima.calCookiesEachHour();
Lima.render();