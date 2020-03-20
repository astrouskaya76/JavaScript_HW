//
let bool = true;
let bool2 = false;
let vv =  -0.78902;
console.log(bool, bool2)
console.log (bool,vv)
console.log (vv, bool);

//
var x = 5.6;
var y = 8.9;
console.log ((x + y),(x - y),(x * y),(x / y),(x % y));

//
var d = -2;
var d1 = d*=3; d1++
console.log (d1);
var d2 = d1-=2; d2/=3
console.log (d2);
var d3 = d2%=2; d3+=1
console.log (d3);
var d4 = d3-=1; d4*=4
console.log (d3);
var d5 = d4+=1; d5-=2
console.log (d5);

//
var num = 46;
var str = "car";
console.log (num, str);
n1 = num *5; console.log (n1, str);
console.log (n1+str);
console.log ( "Result is", n1+str);
var num = 47;
var str = "bike";
console.log (num, str);
var  num2 = 5;
var res = num * num2;
console.log ("My new result is:", res, str);

//
var aa = +"5";
var bb = "F";
var cc = "Hello";
var dd = +"90.2";
const ii = 67;
console.log (cc);
var ff = aa +dd +bb+cc;
console.log(ff);

//
let str1 = ("Hello World!");
let str2 = ("I learn JavaScript\'Module 2\'.");
let str3 = ("I try to do \"My homework\".");
console.log (str1,str2,str3);

//
let jj = 334e5;
let ee = 432e-5;
console.log("My huge awesome numbers is ", jj, ee);
let kk = 567e-5;
console.log("My magic looks like: ",jj*ee*kk);

//
var ll = 3;
var nn = 5;
console.log ("My new numbers is ", ll,nn);
var nn = null;
console.log ("My new numbers is ", ll,nn);
var cc = typeof(ll,nn);
console.log ("My variables type is:", typeof(cc));
var xx = typeof (ll);
var uu = typeof (nn);
console.log ("My first variable is: ",typeof (xx));
console.log ("My second variable is:",typeof (uu));

//
var myNumP = Math.PI;
console.log("My PI number is: ",Math.PI);
var round = Math.ceil(myNumP);
console.log ("My rounded PI number is: ",round);
var round1 = Math.floor (myNumP);
console.log ("My NEW rounded PI number is: ",round1);
console.log ("But my original number PI is: ",myNumP);

//
let num5 = -5;
let str = "Hello!";
let bool = true;
console.log( Math.abs (num5),str,bool);
let num6 = -3;
let num7 = num5-num6;
console.log(Math.abs (num7)+str+bool);

//
let str11 = "txt1";
let str22 = "txt2";
console.log(str11 + " " + str22);
let str33 ="txt1+=это новая фраза";
console.log ("Ух ты!"+ " "+str33 + " " +str22);