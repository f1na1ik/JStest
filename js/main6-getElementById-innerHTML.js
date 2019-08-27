function izmZagolovok () {
let headingElement = document.getElementsByClassName("main-div__title"); //находим элемент, присваиваем его переменной
console.log(headingElement.innerHTML);

let newHeadingText = prompt("Введите новый заголовок: ");
headingElement.innerHTML = newHeadingText;

//jquery
$(".main-div__title").text(newHeadingText);
}

//Append - добавить/присоединить.
function dobavitP() {
    $(".main-div__title").append("<p> Новый параграф </p>");
}

function skrit() {
    $(".main-div__title").fadeOut(500);
}