// имя больше 5 символов и первая буква М
let name = "Максим";
if (name.length>5 && name[0] == 'М') {
    console.log('Ваше имя длинее 5 символов и начинается с М: '+name)
} else if (name.length>4 && name[0] == 'К') {
    console.log('Ваше имя больше 4 символов и начинается с К')
}
else {
    console.log('Ваше имя нам не подходит')
}
//Цикл for
for (let count = 0; count<=10; count=count+2) {
    console.log ('Число = '+count)
}

//выводим все данные массива
let tools = ['ручка', 'карандаш', 'корректор', 'мармелад'];
for (let i = 0; i<tools.length; i++) {
    console.log('Как хорошо, что у меня есть: '+tools[i])
}

//создание функции
function HelloWorld() {
    console.log('Привет')
}
HelloWorld();

//Функция с переменной
function myName(name) {
    console.log('Привет, '+name)
}
myName('Максим Корнеев');myName('Кирпичик');

//функция увеличения числа х2
function double(number) {
    return number*2;
}
let num = double(10);
console.log(num);

// нарисуем кошечку сколько то раз
function drawCats(HowManyTimes) {
    for (let i = 0; i<HowManyTimes; i++) {
        console.log(i+' ^.^');
    }
}
drawCats(3);