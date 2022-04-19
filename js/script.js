let title = document.getElementsByTagName('h1')[0];
let buttonPlus = document.querySelector('.screen-btn');
let otherItemsPercent = document.querySelectorAll('.other-items.percent');
let otherItemsNumber = document.querySelectorAll('.other-items.number');

let inputRange = document.querySelector('.rollback input');
let inputRangeValue = document.querySelector('.rollback .range-value');

let startBtn = document.getElementsByClassName('handler_btn')[0];
let resetBtn = document.getElementsByClassName('handler_btn')[1];

let total = document.getElementsByClassName('total-input')[0];
let totalCount = document.getElementsByClassName('total-input')[1];
let totalCountOther = document.getElementsByClassName('total-input')[2];
let fullTotalCount = document.getElementsByClassName('total-input')[3];
let totalCountRollback = document.getElementsByClassName('total-input')[4];
let screens = document.querySelectorAll('.screen');

const appData = {
	title: '',
	screens: [],
	screenPrice: 0,
	adaptive: true,	
	rollback: 10,
	//allServicePrices: 0,
	servicePricesPercent: 0,
	servicePricesNumber: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	servicesPercent: {},
	servicesNumber: {},
	
	init: function(){
		appData.addTitle();
		startBtn.addEventListener('click', appData.start)
		buttonPlus.addEventListener('click', appData.addScreenBlock)
		inputRange.addEventListener('input', appData.inputRangeRollback)
	},
	addTitle: function(){
		document.title = title.textContent;	
	},
	inputRangeRollback:function(){
		inputRangeValue.innerHTML = inputRange.value + '%';
		appData.rollback = inputRange.value;
		
	},	
	start: function(){		
		appData.addScreens();
		appData.addServices();
		 
		appData.addPrices();		
			
		appData.getServicePercentPrices();			
		appData.showResult();
	},
	showResult: function(){
		total.value = appData.screenPrice;
		totalCount.value = appData.servicePricesPercent + appData.servicePricesNumber;
		totalCountOther.value = appData.fullPrice;
		totalCountRollback.value = appData.servicePercentPrice;
		totalCount.value = appData.count;
	},
	
	addScreens: function(){
		screens = document.querySelectorAll('.screen');
		screens.forEach(function(item, index){
			const select = item.querySelector('select');
			const input = item.querySelector('input');
			const selectName = select.options[select.selectedIndex].textContent;
				if(select.value == '' || input.value == ''){
					alert('необходимо выбрать тип экрана и заполнить их колличество')
				}
			appData.screens.push({
				id: index,
				name: selectName,
				price: +select.value * +input.value,
				count: +input.value
			});
					
				
		})	
			console.log(appData.screens);	
	},
	
	addServices: function(){
		otherItemsPercent.forEach(function(item){
			const check = item.querySelector('input[type=checkbox]');
			const label = item.querySelector('label');
			const input = item.querySelector('input[type=text]');
			
			if(check.checked){
				appData.servicesPercent[label.textContent] = +input.value;		
			}
			
		}); 
		
		otherItemsNumber.forEach(function(item){
			const check = item.querySelector('input[type=checkbox]');
			const label = item.querySelector('label');
			const input = item.querySelector('input[type=text]');
			
			if(check.checked){
				appData.servicesNumber[label.textContent] = +input.value;		
			}
			
		}); 
		
	},
	
	addScreenBlock: function(){
		const cloneScreen = screens[0].cloneNode(true);
		screens[screens.length - 1].after(cloneScreen);
		
	},	
	
	addPrices: function(){
		for(let screen of appData.screens){
			appData.screenPrice += screen.price
		}
		
		for(let key in appData.servicesNumber){
			appData.servicePricesNumber += appData.servicesNumber[key];
		}
		
		for(let key in appData.servicesPercent){
			appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
		}
		appData.fullPrice =  +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
		
		appData.getServicePercentPrices = function(){
			appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))				
			
		} 
		
		let initial = 0;
        appData.count = appData.screens.reduce((a, b) => {
            return a + b.count;
        }, initial); 
	},
	
	logger: function(){						
			console.log(appData.fullPrice);	
			console.log(appData.servicePercentPrice);		 
			console.log(appData.screens);		 
	}
}
appData.init();



