'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let shops = [];
function Shop(location, minCus, maxCus, avgCookies) {

    this.location = location;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.avgCookies = avgCookies;
    this.total = 0;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    shops.push(this);

}

Shop.prototype.calCustomersEachHour = function () {

    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(random(this.minCus, this.maxCus))

    }

}
Shop.prototype.calCookiesEachHour = function () {
    for (let i = 0; i < hours.length; i++) {

        this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));


        this.total += this.cookiesEachHour[i];
    }

}





let Seattle = new Shop('Seattle', 23, 65, 6.3);
console.log(Seattle);

let Tokyo = new Shop('Tokyo', 3, 24, 1.2);
console.log(Tokyo);

let Dubai = new Shop('Dubai', 11, 38, 3.7);
console.log(Dubai);

let Paris = new Shop('Paris', 20, 38, 2.3);
console.log(Paris);

let Lima = new Shop('Lima', 2, 16, 4.6);
console.log(Lima);




let parent = document.getElementById('parent');
console.log(parent);

let table = document.createElement('table');

parent.appendChild(table);



function mkHeader() {
    let headingRow = document.createElement('tr');

    table.appendChild(headingRow);

    let thHeading = document.createElement('th');

    headingRow.appendChild(thHeading);

    thHeading.textContent = 'Shop';


    for (let i = 0; i < hours.length; i++) {

        let thHeading = document.createElement('th');

        headingRow.appendChild(thHeading);

        thHeading.textContent = hours[i];
    }


    let lastTh = document.createElement('th');

    headingRow.appendChild(lastTh);

    lastTh.textContent = 'Daily Total';
}
mkHeader();


Shop.prototype.render = function () {



    let dataRow = document.createElement('tr');

    table.appendChild(dataRow);

    let nameTd = document.createElement('td');

    dataRow.appendChild(nameTd);

    nameTd.textContent = this.location;



    for (let i = 0; i < hours.length; i++) {

        let cookiesTd = document.createElement('td');

        dataRow.appendChild(cookiesTd);

        cookiesTd.textContent = this.cookiesEachHour[i];
    }

    let totalTd = document.createElement('td');

    dataRow.appendChild(totalTd);

    totalTd.textContent = this.total;



}

function mkFooter() {
    let footerRow = document.createElement('tr');

    table.appendChild(footerRow);

    let firstTh = document.createElement('th');

    footerRow.appendChild(firstTh);

    firstTh.textContent = 'Totals';

    let totalOfTotals = 0;

    for (let i = 0; i < hours.length; i++) {

        let totalForEachHour = 0;

        for (let j = 0; j < shops.length; j++) {

            totalForEachHour += shops[j].cookiesEachHour[i];

            totalOfTotals += shops[j].cookiesEachHour[i];
        }

        let footerTh = document.createElement('th');

        footerRow.appendChild(footerTh);

        footerTh.textContent = totalForEachHour;

    }

    let lastTh = document.createElement('th');

    footerRow.appendChild(lastTh);

    lastTh.textContent = totalOfTotals;
}







for (let i = 0; i < shops.length; i++) {
    shops[i].calCustomersEachHour();
    shops[i].calCookiesEachHour();
    shops[i].render();

}
mkFooter();








// let Seattle = {

//     location: 'seattle',
//     minCus: 23,
//     maxCus: 65,
//     avgCookies: 6.3,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     total: 0,

//     calCustomersEachHour: function () {

//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHour.push(random(this.minCus, this.maxCus))

//         }
//     },



//     calCookiesEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {

//             this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));


//             this.total += this.cookiesEachHour[i];
//         }

//     },


//     render: function () {

//         let parent = document.getElementById('parent');
//         console.log(parent);

//         let h2Element = document.createElement('h2');
//         console.log(h2Element);

//         parent.appendChild(h2Element);

//         h2Element.textContent = (this.location);


//         let ulElemnt = document.createElement('ul');

//         parent.appendChild(ulElemnt);

//         for (let i = 0; i < hours.length; i++) {

//             let liElement = document.createElement('li');


//             ulElemnt.appendChild(liElement);


//             liElement.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`
//         }

//         let totalElement = document.createElement('li');


//         ulElemnt.appendChild(totalElement);


//         totalElement.textContent = `Total : ${this.total} Cookies`

//     }
// }
// Seattle.calCustomersEachHour();
// Seattle.calCookiesEachHour();
// Seattle.render();







// let Tokyo = {

//     location: 'Tokyo',
//     minCus: 3,
//     maxCus: 24,
//     avgCookies: 1.2,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     total: 0,

//     calCustomersEachHour: function () {

//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHour.push(random(this.minCus, this.maxCus))

//         }
//     },



//     calCookiesEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {

//             this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));


//             this.total += this.cookiesEachHour[i];
//         }

//     },


//     render: function () {

//         let parent = document.getElementById('parent');
//         console.log(parent);

//         let h2Element = document.createElement('h2');
//         console.log(h2Element);

//         parent.appendChild(h2Element);

//         h2Element.textContent = (this.location);


//         let ulElemnt = document.createElement('ul');

//         parent.appendChild(ulElemnt);

//         for (let i = 0; i < hours.length; i++) {

//             let liElement = document.createElement('li');


//             ulElemnt.appendChild(liElement);


//             liElement.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`
//         }

//         let totalElement = document.createElement('li');


//         ulElemnt.appendChild(totalElement);


//         totalElement.textContent = `Total : ${this.total} Cookies`

//     }
// }
// Tokyo.calCustomersEachHour();
// Tokyo.calCookiesEachHour();
// Tokyo.render();





// let Dubai = {

//     location: 'Dubai',
//     minCus: 11,
//     maxCus: 38,
//     avgCookies: 8.7,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     total: 0,

//     calCustomersEachHour: function () {

//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHour.push(random(this.minCus, this.maxCus))

//         }
//     },



//     calCookiesEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {

//             this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));


//             this.total += this.cookiesEachHour[i];
//         }

//     },


//     render: function () {

//         let parent = document.getElementById('parent');
//         console.log(parent);

//         let h2Element = document.createElement('h2');
//         console.log(h2Element);

//         parent.appendChild(h2Element);

//         h2Element.textContent = (this.location);


//         let ulElemnt = document.createElement('ul');

//         parent.appendChild(ulElemnt);

//         for (let i = 0; i < hours.length; i++) {

//             let liElement = document.createElement('li');


//             ulElemnt.appendChild(liElement);


//             liElement.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`
//         }

//         let totalElement = document.createElement('li');


//         ulElemnt.appendChild(totalElement);


//         totalElement.textContent = `Total : ${this.total} Cookies`

//     }
// }
// Dubai.calCustomersEachHour();
// Dubai.calCookiesEachHour();
// Dubai.render();



// let Paris = {

//     location: 'Paris',
//     minCus: 20,
//     maxCus: 38,
//     avgCookies: 2.3,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     total: 0,

//     calCustomersEachHour: function () {

//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHour.push(random(this.minCus, this.maxCus))

//         }
//     },



//     calCookiesEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {

//             this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));


//             this.total += this.cookiesEachHour[i];
//         }

//     },


//     render: function () {

//         let parent = document.getElementById('parent');
//         console.log(parent);

//         let h2Element = document.createElement('h2');
//         console.log(h2Element);

//         parent.appendChild(h2Element);

//         h2Element.textContent = (this.location);


//         let ulElemnt = document.createElement('ul');

//         parent.appendChild(ulElemnt);

//         for (let i = 0; i < hours.length; i++) {

//             let liElement = document.createElement('li');


//             ulElemnt.appendChild(liElement);


//             liElement.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`
//         }

//         let totalElement = document.createElement('li');


//         ulElemnt.appendChild(totalElement);


//         totalElement.textContent = `Total : ${this.total} Cookies`

//     }
// }
// Paris.calCustomersEachHour();
// Paris.calCookiesEachHour();
// Paris.render();




// let Lima = {

//     location: 'Lima',
//     minCus: 2,
//     maxCus: 16,
//     avgCookies: 4.6,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     total: 0,

//     calCustomersEachHour: function () {

//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHour.push(random(this.minCus, this.maxCus))

//         }
//     },



//     calCookiesEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {

//             this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));


//             this.total += this.cookiesEachHour[i];
//         }

//     },


//     render: function () {

//         let parent = document.getElementById('parent');
//         console.log(parent);

//         let h2Element = document.createElement('h2');
//         console.log(h2Element);

//         parent.appendChild(h2Element);

//         h2Element.textContent = (this.location);


//         let ulElemnt = document.createElement('ul');

//         parent.appendChild(ulElemnt);

//         for (let i = 0; i < hours.length; i++) {

//             let liElement = document.createElement('li');


//             ulElemnt.appendChild(liElement);


//             liElement.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`
//         }

//         let totalElement = document.createElement('li');


//         ulElemnt.appendChild(totalElement);


//         totalElement.textContent = `Total : ${this.total} Cookies`

//     }
// }
// Lima.calCustomersEachHour();
// Lima.calCookiesEachHour();
// Lima.render();