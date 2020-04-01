'use strict'

let money = 23000, income = 'фриланс', addExpenses = 'Интернет, Такси, Коммуналка', deposit = true,
 mission = 200000, period = 12;
 
 console.log(typeof money, typeof income,  typeof deposit);

 console.log(addExpenses.length);

 console.log('Период равен' + ' ' + period + ' ' + 'месяцев');

 console.log('Цель заработать' + ' ' + mission + ' ' + 'рублей');

//  console.log(addExpenses.toLowerCase());

//  let arr = addExpenses.split(',');

//  console.log(arr);

//  console.log(arr[0].toLowerCase(), arr[1].toLowerCase(), arr[2].toLowerCase());

console.log(addExpenses.toLowerCase().split(', '));

 //Lesson03
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

  money = prompt('Ваш месячный доход');

 addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

 deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов?');

let expenses2 = prompt('Введите обязательную статью расходов?');

let amount1 = prompt('Во сколько это обойдется?');

let amount2 = prompt('Во сколько это обойдется?');

let budgetMonth = money - amount1 - amount2;

console.log('Бюджет на месяц: ', budgetMonth);

let missionFill = mission / budgetMonth;

console.log('Цель будет достигнута за: ', Math.ceil(+missionFill));

let budgetDay = +budgetMonth / 30;

console.log(budgetDay);

console.log('Дневной бюджет: ', Math.floor(budgetDay));


switch (true){
    case budgetDay >= 1200:
        console.log('У вас высокий уровень');
        break;
    case 600 < budgetDay < 1200:
        console.log('У вас средний уровень дохода');
        break;
    case 0 < budgetDay <= 600:
        console.log('К сожалению у вас уровень дохода ниже среднего');
        break;
    case budgetDay <= 0:
        console.log('Что то пошло не так'); 
        break;   
}



