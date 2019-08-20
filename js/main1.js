//Объявляем массив, внутри могут быть любые данные
let array = [10, 'КуКу', true, 5, 'Строчка 5'];
console.log(array);

//push добавляет данные в массив
array.push('Добавим еще');
console.log(array);

//pop забирает последний элемент в массиве.
let LastArray = array.pop();
console.log(array);

//shift забирает первый элемент в массиве
let FirstArray = array.shift();
console.log(array);

//unshift добавляет элемент в начало массива
let FirstArrayAdd = array.unshift("ДобавилиЭлемент");
console.log(array);

//indexof(..) узнаем индекс у элемента массива
console.log(array.indexOf('КуКу'));

//join - объединяет все элементы массива через указанный знак
console.log(array.join(' | -_- | '));

