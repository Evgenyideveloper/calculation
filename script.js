let title = document.getElementsByTagName('h1')[0];
console.log(title);

let resetButtons = document.getElementsByClassName('handler_btn');
console.log(resetButtons);

let buttonPlus = document.querySelector('.screen-btn');
let buttonsPercent = document.querySelectorAll('.other-items.percent');
let buttonsNumber = document.querySelectorAll('.other-items.number');
console.log(buttonsPercent);
console.log(buttonsNumber);


let rollbackInput = document.querySelector('.rollback input');
let rollbackRange = document.querySelector('.rollback .range-value');

console.log(rollbackInput);
console.log(rollbackRange);

let totalInput = document.getElementsByClassName('total-input')[0];
let totalInput1 = document.getElementsByClassName('total-input')[1];
let totalInput2 = document.getElementsByClassName('total-input')[2];
let totalInput3 = document.getElementsByClassName('total-input')[3];
let totalInput4 = document.getElementsByClassName('total-input')[4];


console.log(totalInput);

let screens = document.querySelectorAll('.screen');

console.log(screens);



const appData = {
	title: '',
	screens: [],
	screenPrice: 0,
	adaptive: true,	
	rollback: 10,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	services: {},
		
	start: function(){
		appData.asking();
		appData.addPrices();
		
		//appData.getAllServicePrices();
		appData.getFullPrice();
		appData.getServicePercentPrices();
		appData.getTitle();
		appData.logger();
	},
	
	asking: function(){
		appData.title = appData.isString('Как называется ваш проект?', 'Калькулятор верстки');
		
		for(let i = 1;i <= 2;i++){		
			let name = appData.isString('Какие типы экранов нужно разработать?');
			let price = 0;
			
			do {
				price = +prompt('Сколько это будет стоить?');
			}while(!appData.checkNumber(price));
			
			appData.screens.push({id:i, name:name, price:price});
		}
		
		
		
		for(let i = 1;i <= 2;i++){
		
			let name = appData.isString('Какой дополнительный тип услуги нужен?');
			let price = 0;
				
			
			
			do {
				price = +prompt('Сколько это будет стоить?');
			}while(!appData.checkNumber(price)); 
				 
			appData.services[name] = +price;
			
		}		
		appData.adaptive = confirm('Нужен адаптив на сайте?');
	},
	
	checkNumber: function(number){
		return !isNaN(parseInt(number)) && isFinite(number);
	},
	
	isString: function(text){
		let answer;

		do {
			answer = prompt(text);
		} while (appData.checkNumber(answer));

		return answer;
	},
	
	addPrices: function(){
		for(let screen of appData.screens){
			appData.screenPrice += screen.price
		}
		
		for(let key in appData.services){
			appData.allServicePrices += appData.services[key];
		}
	},
	
	
	
	
	getFullPrice: function(){
		appData.fullPrice =  +appData.screenPrice + appData.allServicePrices;
	},
	
	getServicePercentPrices: function(){
		appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
	},
	
	getTitle: function(){
		appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
	},
	
	getRollbackMessage: function(price){
		if(price > 30000){	
			return "Даем скидку в 10%";
		}else if(price <= 30000 && price > 15000){
			return "Даем скидку в 5%";
		}else if(price >= 0 && price <= 15000){
			return "Скидка не предусмотрена";
		}else{
			return "Что то пошло не так";
		}
	},	
	logger: function(){						
			console.log(appData.fullPrice);	
			console.log(appData.servicePercentPrice);		 
			console.log(appData.screens);		 
	}
}
appData.start();



