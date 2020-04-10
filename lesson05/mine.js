"use strict";

let income = 'фриланс',
 mission = 200000, period = 12;

let money;

let start = () =>{

     do { money = +prompt('Ваш месячный доход');
        } while (Number.isNaN(parseFloat(money)));    

};
start();

console.log(money);

let showTypeOf = (n) => console.log(typeof(n));

showTypeOf(money);
showTypeOf(income);
showTypeOf(mission);
showTypeOf(period);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

console.log(addExpenses.split(', '));

let deposit = confirm('Есть ли у вас депозит в банке?');

 let expenses1, expenses2;

let isNumber = (n) => !Number.isNaN(parseFloat(n)) && isFinite(n);

let getExpensesMonth = () => {
    let sum = 0;
    for ( let i = 0; i < 2; i++) {

        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов?');
        } else if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов?');
        }
        let checkNumber;
        
        do {
             checkNumber = +prompt('Во сколько это обойдется?');
        }while (!isNumber(checkNumber));

        console.log(Boolean(checkNumber));

        sum += checkNumber;
        }  
    return sum; 
}; //Сумма робязательных расходов за месяц

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

let getAccumulatedMonth = () => money - expensesAmount; //Накопления за месяц

console.log(getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = () => Math.floor(mission / accumulatedMonth); // Период достижения цели

let targetMonth = getTargetMonth();

if (targetMonth < 0) {
    console.log('Цель не будет достигнута');
} else if (targetMonth >= 0) {
    console.log('Цель будет достигнута ' + getTargetMonth());
}

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