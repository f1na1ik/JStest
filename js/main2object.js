//создаем объект tool
let tool = {
    "name":"pancil",
    "color":"red",
    "diametr":5,
    "sharpened":true
};

//выводим выбранное значение tools
console.log(tool.name, tool.color);

//узнаем, какие у объекта есть ключи(характеристики)
console.log(Object.keys(tool));

//создаем сразу много объектов tools
let tools = [
    {"name":"pancil", "color":"red", "sharpened":true},
    {"name":"corrector", "color":"blue", "sharpened":false},
    {"name":"pen", "color":"green", "sharpened":false},
    {"name":"marker", "color":"yellow", "sharpened":false}
];

console.log([tools[1]["name"],tools[2]["name"]]);

// создадим объект другим методом
let dog = {};
dog.name = "Шарик";
dog.color = "Белый";
console.log(dog)

// еще один метод
let cat = {};
cat["name"] = "Киса";
cat["color"] = "Черный";
console.log(cat);

//Задание - решение
let myCrazyObject = {
    "name" : "Нелепый объект",
    "some array" : [7,9, {purpose: "путаница", number: 123}, 3.3],
    "random animal" : "Банановая акула"
};

console.log(myCrazyObject["some array"][2].number);