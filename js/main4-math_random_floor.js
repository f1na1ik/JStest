// Math.random - случайное число от 0 до 1
// Math.floor - округление чисел
console.log(Math.random());

// случайные числа от 0 до 100
console.log(Math.floor(Math.random()*100));

let phrases = [
    'Да, определенно',
    'Нет, только не сейчас',
    'Решай сам',
    'Это плохая идея',
    'Это хорошая идея'
];

console.log('Пойти сегодня в институт? - '+phrases[Math.floor(Math.random()*phrases.length)]);