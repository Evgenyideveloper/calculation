let title =  'Курс JavaScript';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 8000;
let rollback = 32;
let fullPrice = 100000;
let adaptive = true;



console.log(typeof title);
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

let scr = screens.toLocaleLowerCase().split('');
console.log(scr);

let otkat = (fullPrice * (rollback/100));
console.log(otkat);