//создаем объект tool
let tool = {
    "name":"pancil object",
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
