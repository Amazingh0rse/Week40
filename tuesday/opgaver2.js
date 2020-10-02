//opgave 2a
console.log("opg2a")
const array = ["Alexander", "Jean-Poul", "Per", "Mick", "Morten"];

console.log(array);

function theCallback(param) {
    if (param.length != null) {
        return true;
    } else {
        return false;
    }
}

function myFilters(array, callback) {
    array = array.filter(e => e.startsWith("J"));
    return array;
}

console.log(myFilters(array, theCallback));


//opgave 2b
console.log("opg2b")


const arrTwo = ["Alexander", "Jean-Poul", "Per", "Mick", "Morten"];
const arry = ["Alexander", "Jean-Poul", "Per", "Mick", "Morten"];


function aCallback(param) {
    if (param.length != null) {
        return true;
    } else {
        return false;
    }
}

function myMap(array, callback) {
    const arrTwo = ["Alexander", "Jean-Poul", "Per", "Mick", "Morten"];
    let str = arrTwo.join(' ');
    // console.log(str);

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    let tester = newString.split(' ').reverse();

    return tester;
}

console.log(myMap(arry, aCallback));
