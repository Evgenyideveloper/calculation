let title =  'Курс JavaScript';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 12000;
let rollback = 30;
let fullPrice = 100000;
let adaptive = true;



/* console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(screenPrice + ' ' + 'рублей');
console.log(Math.round(+screenPrice/75) + ' ' + 'долларов');
console.log(Math.round(+screenPrice/3,17) + ' ' + 'гривен');
console.log(Math.round(+screenPrice/14.7) + ' ' + 'юаней');
console.log(fullPrice);
console.log(fullPrice + ' ' + 'рублей');
console.log(Math.round(+fullPrice/75) + ' ' + 'долларов');
console.log(Math.round(+fullPrice/3,17) + ' ' + 'гривен');
console.log(Math.round(+fullPrice/14.7) + ' ' + 'юаней');
 */
let scr = screens.toLocaleLowerCase().split('');
//console.log(scr);

let otkat = (fullPrice * (rollback/100));
//console.log(otkat);





let nameProgekt = prompt('Как называется ваш проект?');
title = nameProgekt;
//console.log(title);
//туристическое агентство Ветер перемен

let tipEkran = prompt('Какие типы экранов нужно разработать?');
screens = tipEkran;
//console.log(screens);
//Интерактивные

let priceWork = prompt('Сколько будет стоить данная работа?');
screenPrice = priceWork;
//console.log(screenPrice);
//12000 

let saiteAdaptive = prompt('Нужен ли адаптив на сайте?');
if(saiteAdaptive == 'да'){
	adaptive = true;
	console.log(adaptive);
}else{
	adaptive = false;
	console.log(adaptive);
}

let usluga1 = prompt('Какой дополнительный тип услуги нужен?');
let service1 = usluga1;
//console.log(service1);
//модальное окно

let stoimost1 = prompt('Сколько это будет стоить?');
let servicePrice1 = stoimost1;
//console.log(servicePrice1);
//10000

let usluga2 = prompt('Какой дополнительный тип услуги нужен?');
let service2 = usluga2;
//console.log(service2);
//аккордеон

let stoimost2 = prompt('Сколько это будет стоить?');
let servicePrice2 = stoimost2;
//console.log(servicePrice2);
//8000 

fullPrice = parseInt(screenPrice) + parseInt(servicePrice1) + parseInt(servicePrice2);
console.log(fullPrice); 




otkat = (fullPrice * (rollback/100));
let servicePercentPrice = parseInt(fullPrice) - parseInt(otkat);
console.log(servicePercentPrice);

if(fullPrice > 30000){	
	console.log("Даем скидку в 10%");
}
if(fullPrice <= 30000 && fullPrice > 15000){
	console.log("Даем скидку в 5%");
}
if(fullPrice >= 0 && fullPrice < 15000){
	console.log("Скидка не предусмотрена");
}
if(fullPrice < 0){
	console.log("Что то пошло не так");
}
