//учимся считать
let SecondInMinute = 60;
let MinuteInHour = 60;
let SecondInHour = SecondInMinute*MinuteInHour;
console.log('Секунд в часе: '+SecondInHour);

//соединяем строчки
let String1 = 'кукуруза';
let String2 = ' с сиропом';
let String3 = String1+String2;
console.log(String3+'. Количество букв в строке: '+String3.length);

//выводим 5 букву (пишем в квадратных скобках). Отсчет идет от 0.
console.log(String3[5]);

//переключаем все буквы в нижний и вернхние регистры
let String4 = 'БоЛьШиЕ БукВы';
console.log(String4.toLocaleLowerCase());
console.log(String4.toLocaleUpperCase());

//отрезаем текст с помощью slice. slice(1) - с первой буквы по... slice (1,3) - с первой буквы по третью
console.log(String4.slice(8).toLocaleUpperCase());
console.log(String4.slice(0,7).toLocaleLowerCase());

// напишем скрипт, который делает первую буквую большой, остальные маленькие
let String5 = "сДелать Тут ПеРвУю БукВу БолЬшую ОтсАлЬнЫе МаЛенЬкие";
let FirstChar = String5[0].toLocaleUpperCase();
let Str1=String5.slice(1).toLocaleLowerCase();
console.log(FirstChar+Str1);

console.log(10<5);