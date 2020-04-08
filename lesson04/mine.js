"use strict";

let income = 'фриланс',
 mission = 200000, period = 12;

let money = prompt('Ваш месячный доход');

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');


console.log(addExpenses.split(', '));

let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов?');

let expenses2 = prompt('Введите обязательную статью расходов?');

let amount1 = prompt('Во сколько это обойдется?');

let amount2 = prompt('Во сколько это обойдется?');

// let budgetMonth = money - amount1 - amount2;

// console.log('Бюджет на месяц: ', budgetMonth);

// let missionFill = mission / budgetMonth;

// console.log('Цель будет достигнута за: ', Math.ceil(+missionFill));

let accumulatedMonth = function getAccumulatedMonth() {
    return parseInt(money) - parseInt(amount1) - parseInt(amount2);
};

let budgetDay = accumulatedMonth() / 30;

console.log('Дневной бюджет: ', Math.floor(budgetDay));


switch (true){
    case budgetDay >= 0 && budgetDay < 600:
        console.log('К сожалению у вас уровень дохода ниже среднего'); 
        break;
    case budgetDay >= 600 && budgetDay < 1200:
        console.log('У вас средний уровень дохода');  
        break;  
    case budgetDay >= 1200:
        console.log('У вас высокий уровень дохода');
        break;
    case budgetDay < 0:
        console.log('Что то пошло не так');
        break;
}

function getExpensesMonth() {
    return  parseInt(amount1)  + parseInt(amount2);
}
console.log(+getExpensesMonth());


function getTargetMonth() {
    return Math.floor(parseInt(mission) / accumulatedMonth());
}

console.log(getTargetMonth());
