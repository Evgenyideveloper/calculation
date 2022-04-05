

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const getAllServicePrices = () =>{
	return servicePrice1 + servicePrice2;	
}

const showTypeOf = function (variable){
	console.log(variable, typeof variable);
}

function getFullPrice(){
	return screenPrice + allServicePrices;
}

const getServicePercentPrices = function(){
	return fullPrice - (fullPrice * (rollback / 100))
}

const getTitle = () =>{
	return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
}

const getRollbackMessag = (price) =>{
	if(price > 30000){	
		return "Даем скидку в 10%";
	}else if(price <= 30000 && price > 15000){
		return "Даем скидку в 5%";
	}else if(price >= 0 && price <= 15000){
		return "Скидка не предусмотрена";
	}else{
		return "Что то пошло не так";
	}
}

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(fullPrice);
console.log(getRollbackMessag(fullPrice));

