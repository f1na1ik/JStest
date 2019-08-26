// При загрузке стр спрашивает, как зовут.
/* let name = prompt("Как вас зовут?");
console.log("Привет, " + name); */

// Вопрос ДА/НЕТ
/* let likesDogs = confirm("Тебе нравятся песики?");
if (likesDogs) {
    console.log("Все любят песиков");
} else {
    console.log("Скоро полюбишь.");
} */

//создаем массив со словами
function igra() {
let words = [
    "сыр",
    "мир",
    "мышь"
];
let word = words[Math.floor(Math.random() * words.length)]; //выбираем случайное слово
let answerArray = []; // массив с ответом

//заполняем массив черточками в зависимости от того, какой длины слово
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_"
}

let remainingLetters = word.length; //сколько букв осталось отгадать

while (remainingLetters > 0) {
    alert(answerArray.join(" ")); //выводим черточки
    let guess = prompt("Угадайте букву"); //предполагаемая буква
    if (guess === null) { //если нажата отмена
        break; //выйти из цикла
    } else if (guess.length !== 1) { //ввели не одну букву
        alert("Пожалуйста, введите только одну букву.");
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) { //равен ли символ тому, который мы предположили
                answerArray[j] = guess; //записать букву под нужным индексом
                remainingLetters--; //уменьшить количество оставшихся букв
            }
        }
    }
}
alert(answerArray.join(" "));
alert("Отлично, было загадано слово '" + word +"'");
}

