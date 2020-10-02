//opgave 4a
var all = ["Hassan", "Peter", "Carla", "Boline"];

console.log(" ");
console.log("opgave 4a");
console.log(all.join("#"));

//opgave 4b.
const numbers2 = [2, 3, 67, 33];

totalValue = numbers2.reduce((total, currentElement) => { return total + currentElement });
console.log(" ");
console.log("Opg 4b");
console.log(totalValue);


//opgave 4c.
var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }]

let avgs = members.reduce((ac, a) => a.age + ac, 0) / members.length
console.log(" ");
console.log("Opg 4c");
console.log(avgs)


//opgave 4d
const votes = ["Biden", "Trump", "Biden", "Biden", "Trump", "Trump", "Biden", "None"];

var initialValue2 = {}

var reducer = function (tally, vote) {
    if (!tally[vote]) {
        tally[vote] = 1;
    } else {
        tally[vote] = tally[vote] + 1;
    }
    return tally;
}

var result4 = votes.reduce(reducer, initialValue2)

console.log(" ");
console.log("Opg 4d");
console.log(result4);