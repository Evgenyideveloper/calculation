
const appData = {
	title: '',
	screens: '',
	screenPrice: 0,
	adaptive: true,	
	rollback: 10,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	service1: '',
	service2: '',	
	
	asking: function(){
		appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
		appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Cложные , Интерактивные');
	
		do {
			appData.screenPrice = +prompt('Сколько это будет стоить?');
		}while(!appData.checkNumber(appData.screenPrice));
		
		appData.adaptive = confirm('Нужен адаптив на сайте?');
	},
	
	checkNumber: function(number){
		return !isNaN(parseInt(number)) && isFinite(number);
	},
	
	
	
	getAllServicePrices: function(){
		let num = 0;
		
		for(let i = 1;i <= 2;i++){
			let price = 0;
				
			
			if(i === 1){		
				appData.service1 = prompt('Какой дополнительный тип услуги нужен?');				
			}if(i === 2){
				appData.service2 = prompt('Какой дополнительный тип услуги нужен?')			
				}
		do {
			price = +prompt('Сколько это будет стоить?');
		}while(!appData.checkNumber(price)); 
			 
		
			num = num + price; 
		}
		return num;
	},
	
	
	getFullPrice: function(){
		return +appData.screenPrice + appData.allServicePrices;
	},
	
	getServicePercentPrices: function(){
		return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
	},
	
	getTitle: function(){
		return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
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
	
	start: function(){
		appData.asking();
		appData.allServicePrices = appData.getAllServicePrices();
		appData.fullPrice = appData.getFullPrice();
		appData.servicePercentPrice = appData.getServicePercentPrices();
		appData.title = appData.getTitle();
		appData.logger();
	},
	
	logger: function(){
	
		for(let key in appData){
			console.log(key, '=', appData[key]);			
		}		
	}
}
appData.start();