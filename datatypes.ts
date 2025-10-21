
let lname : string;
// lname = 10; // gives error because lname is of type string and cannot be assigned a number. 
lname = "Emeema";
let newname= lname.toUpperCase();
console.log(newname);

// number:
let age : number;
// age = "10"; // gives error because age is of type number and cannot be assigned a string. 
age = 10.5;
age = 10;
let result = parseInt("10.5");
console.log(result);
console.log(age);

//boolean 

let isvalid : boolean=false;
console.log(isvalid);

//Array are of 2 ways both are same can use anyone
let empList :string[];
empList = ["Emeema","Anu","Asha"];
let numList:Array<number>;//generic array type
numList = [10,20,30];
let results = numList.filter(N => N>=2);
let results1 = numList.find((num)=>num===20);
let sum = numList.reduce((accum,current)=>accum+current); //this is useful when you have mch products to caluclate within an object
console.log(empList);
console.log(numList);
console.log(results);
console.log(results1);
console.log(sum);

//Enum
const enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Blue;

//Tuples
let swapNumbs : [number,number];
function SwapNumbers(num1:number,num2:number) :[number,number]{
  return [num2,num1];
}
swapNumbs = SwapNumbers(10,20);
swapNumbs[0];
swapNumbs[1];
//swapNumbs[2]; // gives error as tuple has only 2 elements
console.log(swapNumbs);

//Any
let department:any;
department = "IT";
department = 10;
department = true;
console.log(department);

//void and never


//functions
