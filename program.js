var myArray = process.argv;
var sumArray = 0;

for (var i = 2; i < myArray.length; i++) {
    sumArray += parseInt(myArray[i]);
}

console.log(sumArray);