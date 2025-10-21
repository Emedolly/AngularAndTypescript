//named function
function add(number1:number,number2:number):number{
  return number1+number2;
}

console.log(add(10,20));

//Arrow function
const sub = (number1:number,number2:number):number=>number1-number2;
console.log(sub(20,10));

//function expression  
const mult = function(number1:number,number2:number):number{
  return number1*number2;
}
console.log(mult(10,20));

//Optional parameters
function add1(num1:number,num2:number, num3?:number):number{
  return num3 ? num1+num2+num3 : num1+num2;
}
console.log(add1(10,20));
console.log(add1(10,20,30));

//required parameters/default parameters num3=10 is default value
const sub1 = (num1:number,num2:number,num3:number=10):number=>num1-num2-num3;
console.log(sub1(30,10));
console.log(sub1(30,10,5));

//Rest parameters
function add2(num1:number, num2:number, ...num3:number[]):number{
return num1+num2+ num3.reduce((accum,current)=>accum+current,0);
}
console.log(add2(10,20));
console.log(add2(10,20,...[30,40,50]));

//Generic function
function getItems<Type>(items: Type[]):Type[]
{
  return new Array<Type>().concat(items);
}

let concatResult1 = getItems([1,2,3,4]);
console.log(concatResult1);
let concatResult2 = getItems<string>(["Emeema","Anu","Asha"]);
console.log(concatResult2);