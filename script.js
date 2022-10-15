'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
const rollback = Math.random() * 99;

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
};
const asking = function () {
    title = prompt('Как называется ваш проект?');
    screens = prompt('Какие типы экранов нужно разработать?');
    screenPrice = +prompt('Сколько будет стоить данная работа?');

    while (!isNumber(screenPrice)) {
        screenPrice = +prompt('Сколько будет стоить данная работа?');
    }

    adaptive = confirm('Нужен ли адаптив на сайте?');
};
const showTypeOf = function (variable) {
    return variable + ' ' + typeof variable;
};
const getAllServicePrices = function () {

    let servicePrice = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
            servicePrice = +prompt('Сколько это будет стоить?');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
            servicePrice = +prompt('Сколько это будет стоить?');
        }

        while (!isNumber(servicePrice)) {
            servicePrice = +prompt('Сколько это будет стоить?');
        }
    }
    return servicePrice + servicePrice;
};
const getServicePercentPrices = function (variableone, variabletwo) {
    return variableone - Math.ceil((variableone * (variabletwo / 100)));
};
const getRollbackMessage = function (price) {
    if (price > 30000) {
        return 'Даем скидку в 10%';
    } else if (price > 15000) {
        return 'Даем скидку в 5%';
    } else if (price > 0) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что-то пошло не так';
    }
};

function getTitle(str) {
    return str.trim()[0].toUpperCase() + str.trim().slice(1).toLowerCase();
}
function getFullPrice(firstvariable, secondvariable) {
    return firstvariable + secondvariable;
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

console.log(allServicePrices);
console.log(servicePercentPrice + ' рублей');
console.log(getRollbackMessage(fullPrice));
console.log(getTitle(title));
console.log(fullPrice);

console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(Boolean(adaptive)));
console.log(screens.length);