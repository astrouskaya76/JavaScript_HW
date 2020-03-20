//1
let a = 5;
let b = 8;
if (a  % 2 != 0){
    console.log (a);
}
else {
    console.log (b);
}
//2
let a = 5;
let b = -3;
let c = a / b !=0 ? a/b : 1;
console.log (c);

//3
let x;
console.log (x < 50 && x >= 32 && x!= 37);

//4
for (i = 11; i<=33;i++){
    console.log (i);
}
//5
let i = 11;
while (i<=33){
    console.log (i);
    i++;
}
//6
for (i = -30; i<=0; i+=3){
    console.log(i);
}

//7
for (i = 0; i<=30; i+=2){
    if (i===15) {continue;} // 15 odd?
    console.log(i);
}

//8

for (i = 0; i < 100; i+=4) {
    if (i === 68) { break; }  // 64 it not 66 ??
    console.log (i);
}

//9

let i = 0
do{
    console.log (i);
    i++;
}
while (i <= 5); //  I used https://code.sololearn.com/ code playground  - it was? correct

//10
let a = "go";
switch (a) {
    case "sleep":
        console.log("sleep 2 hours");
        break;
    case "walk":
        console.log("walk 1 hour");
        break;
    case "jump":
        console.log("jump 30 mins");
        break;
    case "fly":
        console.log("fly");
        break;
    case "go":
        console.log("let's go");
        break;
    default:
        console.log("take relax");
}
//11
let balloons =7;
if ( balloons ==3) {
    console.log("We have 3 balloons");
} else if (balloons ==2) {
    console.log("We have 2 balloons");
}
else if (balloons ==1) {
    console.log("We have 1 balloons");
}
else {
    console.log(" We have fun! ");
}

//12
let x = 7.99;
let y = 7.25;
console.log (Math.round(7.99));
console.log (Math.round(7.25));

//13

let x = 4;
let y = 2;
console.log(Math.pow(x, y));

//14
let x = 144
console.log(Math.sqrt(x))

//15
let x = -7;
console.log (Math.abs(-7));

//16
let x = 7.3;
console.log (Math.ceil(7.3));

//17
let x = 7.3;
console.log (Math.floor(7.3));

//18
console.log(Math.min(2, 3, 1));

//19
console.log(Math.max(2, 3, 1));

//20
Math.floor(Math.random() * 100);

//21
let a = [10,"She",5, 4, "World"];
let b = a[2];
console.log (b);
a[0] = 9;
console.log (a);
console.log (typeof(a));
a.length;
a.sort();
let c = a[a.length - 1];
console.log(c);
let i;
for (i = 0; i < a.length; i++) {
    console.log(a[i]);
}
a.push ("You");
console.log (a);
console.log(a.toString());
console.log(a.join(" * "));
a.pop();
console.log(a);
a.push ("Sun");
console.log (a);
a.shift ();
console.log (a);
a.unshift ("Color");
console.log (a);
delete a[0];
console.log (a);
a.splice(0, 1, "Blue", "Grey");
console.log (a);
a.splice (1,1);
console.log (a);

//22
let a = ["She","Sun","Blue", "World"];
let b = [1,2,3,4];
let c = a.concat(b);
console.log(c);

//23

let a = ["She","Sun","Blue", "World"];
let b = [1,2,3,4];
let d = [6,7,8];
let c = a.concat(b,d);
console.log(c);

//24
let a = ["She",1,"Sun",2,"Blue"];
let c = a.slice(1);
console.log(c);

//25

let a = ["She",1,"Sun",2,"Blue"];
let c = a.slice(3);
console.log(c);

//26

let a = ["She","Grey","Sun","World","Blue"];
a.sort();
console.log(a);


//27
let a = ["She","Grey","Sun","World","Blue"];
a.reverse();
console.log(a);

//28
let a = ["She","Grey","Sun","World","Blue"];
let c = a.indexOf("Grey");
console.log(c);

//29
let a = ["She","Grey","Sun","World","Blue"];
let c = a.lastIndexOf("Blue");
console.log(c);

//30

console.log(Math.random())

//31
Math.floor(Math.random() * 101);

