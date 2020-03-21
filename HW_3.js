//
const cars = ["Audi", "Volvo", "BMW", "Mercedes"];
console.log(cars.join());
console.log(cars.join(", "));
console.log(cars.join(" "));
//


const arr = [ "a", "b", "c", "d", "e" ]
arr.pop();
const ar= arr.shift();
console.log(arr);

//

var a = [ "a,b,c", "d", "e" ];
console.log(a.toString());

//
var g = new Array(24, -63, 67, -12, 88, 94, -28, 82, 0, 53);
console.log(Math.min(...g));

//
var x = new Array(24, -63, 67, -12, 88, 94, -28, 82, 0, 53);
console.log(Math.min(...x));
console.log(Math.max(...x));

//
var kkk = [9, 25, 78, 23, -43, 4];
kkk.sort(function (a,b){
    return b-a
} )
console.log(kkk);