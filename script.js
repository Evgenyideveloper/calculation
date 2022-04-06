

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const checkNumber = (number) =>{
	return !isNaN(parseInt(number)) && isFinite(number);
}

const toAsk = () =>{
	title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
	let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Cложные , Интерактивные');
	
	do {
		screenPrice = +prompt('Сколько это будет стоить?');
	}while(!checkNumber(screenPrice));
	
	adaptive = confirm('Нужен адаптив на сайте?');
}

const getAllServicePrices = () =>{
	let cena = 0;
	
	for(let i = 1;i <= 2;i++){
		let price = 0;
		
		if(i === 1 && checkNumber(price) !== undefined){
			service1 = prompt('Какой дополнительный тип услуги нужен?');		
			price = +prompt('Сколько это будет стоить?');
					
		}if(i === 2 && checkNumber(price) !== undefined){
			service2 = prompt('Какой дополнительный тип услуги нужен?')			
			price = +prompt('Сколько это будет стоить?');			
		}		
		cena = cena + price; 
	}
	return cena;
}

const showTypeOf = function (variable){
	console.log(variable, typeof variable);
}

const getFullPrice = function(){
	return +screenPrice + allServicePrices;
}

const getServicePercentPrices = function(){
	return fullPrice - (fullPrice * (rollback / 100))
}

const getTitle = () =>{
	return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
}

const getRollbackMessage = (price) =>{
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

toAsk();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(fullPrice);
console.log(getRollbackMessage(fullPrice));