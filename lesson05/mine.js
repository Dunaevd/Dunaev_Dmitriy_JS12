"use strict";

let showTypeOf = (n) => console.log(typeof(n));

let income = 'фриланс',
 mission = 200000, period = 12;

let money = prompt('Ваш месячный доход');

showTypeOf(money);
showTypeOf(income);
showTypeOf(mission);
showTypeOf(period);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

console.log(addExpenses.split(', '));

let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов?');

let amount1 = prompt('Во сколько это обойдется?');

let expenses2 = prompt('Введите обязательную статью расходов?');

let amount2 = prompt('Во сколько это обойдется?');

let getExpensesMonth = () => +amount1  + +amount2; //Сумма робязательных расходов за месяц

console.log(getExpensesMonth());

let getAccumulatedMonth = () => money - amount1 - amount2; //Накопления за месяц

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = () => Math.floor(mission / accumulatedMonth); // Период достижения цели

console.log(getTargetMonth());

let budgetDay = accumulatedMonth / 30; //Дневной бюджет

console.log('Дневной бюджет: ', Math.floor(budgetDay));


let getStatusIncome = () => {
    let i = budgetDay;
switch (true){
    case i >= 0 && i < 600:
        console.log('К сожалению у вас уровень дохода ниже среднего'); 
        break;
    case i >= 600 && i < 1200:
        console.log('У вас средний уровень дохода');  
        break;  
    case i >= 1200:
        console.log('У вас высокий уровень дохода');
        break;
    case i < 0:
        console.log('Что то пошло не так');
        break;
}};

getStatusIncome();