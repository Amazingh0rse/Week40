//Getting really comfortable with filter and map

//opgave 3a
console.log("opg3a")

var numbers = [1, 3, 5, 10, 11];

var result3a = numbers.map(
    (x, idx, arr) => idx < arr.length - 1 ? x + arr[idx + 1] : x
);

console.log(result3a);

//opgave 3b
console.log("opg3b")
var link = [
    "<a href=\"#\">Hassan</a>",
    "<a href=\"#\">Peter</a>",
    "<a href=\"#\">Jan</a>",
    "<a href=\"#\">Boline</a>"
];

var result = "<nav>" + link.map(function (nav) {
    return result = nav;
}).join(" ") + "</nav>";

document.getElementById("result").innerHTML = result;


//opgave 3c
let persons = [
    { name: "Hassan", phone: "1234567" },
    { name: "Peter", phone: "675843" },
    { name: "Jan", phone: "98547" },
    { name: "Boline", phone: "79345" }];

var tbody = document.getElementById("tbody");
tbody.innerHTML = "";

let table = "<tbody>" + persons.map(function (person) {
    return "<tr><td>" + person.name + "</td><td>" + person.phone + "<td></tr>";
}).join(" ") + "</tbody>";
tbody.innerHTML += table;
