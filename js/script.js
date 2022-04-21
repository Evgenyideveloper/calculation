'use strict';

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
		this.addTitle();
		startBtn.addEventListener('click', this.start)
		resetBtn.addEventListener('click', this.reset)
		buttonPlus.addEventListener('click', this.addScreenBlock)
		inputRange.addEventListener('input', this.inputRangeRollback)
	},
	addTitle:() =>{
		document.title = title.textContent;	
	},
	inputRangeRollback:() =>{
		inputRangeValue.innerHTML = inputRange.value + '%';
		this.rollback = inputRange.value;
		
	},	
	start: function(){		
		appData.addScreens();
		appData.addServices();
		 
		appData.addPrices();		
			
		appData.getServicePercentPrices();			
		appData.showResult();
		
		///////////////////////
		
		startBtn.disabled = true;
        startBtn.style.display = 'none';
        
        resetBtn.disabled = false;
        resetBtn.style.display = 'block';		
		
		inputRange.disabled = true;
		buttonPlus.disabled = true;
		
		let select = document.querySelectorAll('select');
        let inputText = document.querySelectorAll("input[type='text']");

        inputText.forEach(function (elem) {
            elem.disabled = true;
        });
		
		select.forEach(function (elem) {
            elem.disabled = true;
        });		
		
	},
	
	reset: function(){		
		startBtn.disabled = false;
        startBtn.style.display = 'block';
        
        resetBtn.disabled = true;
        resetBtn.style.display = 'none';		
		
		inputRange.disabled = false;
		inputRange.value = 0;
		//inputRangeValue = inputRange.value;
		buttonPlus.disabled = false;
		
		let select = document.querySelectorAll('select');
        let inputText = document.querySelectorAll("input[type='text']");

        inputText.forEach(function (elem) {
            elem.disabled = false;
            elem.value = '';
        });
		
		select.forEach(function (elem) {
            elem.disabled = false;
        });	

		/* for (let i = select.length - 1; i > 0; i--) {
            select[0].parentNode.removeChild(select[i]);
        } */
         
		
	},
	
	showResult: function(){
		total.value = this.screenPrice;
		totalCount.value = this.servicePricesPercent + appData.servicePricesNumber;
		totalCountOther.value = this.fullPrice;
		totalCountRollback.value = this.servicePercentPrice;
		totalCount.value = this.count;
	},
	
	addScreens: function(){
		screens = document.querySelectorAll('.screen');
		screens.forEach((item, index)=>{
			const select = item.querySelector('select');
			const input = item.querySelector('input');
			const selectName = select.options[select.selectedIndex].textContent;
				if(select.value !== '' && input.value !== ''){
					
				  this.screens.push({
					id: index,
					name: selectName,
					price: +select.value * +input.value,
					count: +input.value
				  });
				} else {
				  this.screens.splice(0);
				}
								
		})	
			console.log(appData.screens);	
	},
	
	addServices: function(){
		otherItemsPercent.forEach((item)=>{
			const check = item.querySelector('input[type=checkbox]');
			const label = item.querySelector('label');
			const input = item.querySelector('input[type=text]');
			
			if(check.checked){
				this.servicesPercent[label.textContent] = +input.value;		
			}
			
		}); 
		
		otherItemsNumber.forEach((item)=>{
			const check = item.querySelector('input[type=checkbox]');
			const label = item.querySelector('label');
			const input = item.querySelector('input[type=text]');
			
			if(check.checked){
				this.servicesNumber[label.textContent] = +input.value;		
			}
			
		}); 
		
	},
	
	addScreenBlock: function(){
		screens = document.querySelectorAll('.screen');
		const cloneScreen = screens[0].cloneNode(true);
		
		cloneScreen.querySelector('input').value = '';
		screens[screens.length - 1].after(cloneScreen);
		
	},	
	
	addPrices: function(){
		for(let screen of this.screens){
			this.screenPrice += screen.price
		}
		
		for(let key in this.servicesNumber){
			this.servicePricesNumber += this.servicesNumber[key];
		}
		
		for(let key in this.servicesPercent){
			this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
		}
		this.fullPrice =  +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
		
		this.getServicePercentPrices = () =>{
			this.servicePercentPrice =  this.fullPrice - (this.fullPrice * (this.rollback / 100))				
			
		} 
		
		let initial = 0;
        this.count = this.screens.reduce((a, b) => {
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



