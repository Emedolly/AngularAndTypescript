//Classes contain business logic and data together
//Creating class and properties then assigning the values to it and displaying the object using console.log
class Employee{
  id!:number;
  name!:string;
  address!:string;
}
let emeema = new Employee();
emeema.id = 101;
emeema.name = "Emeema";
emeema.address = "Bengaluru";
console.log(emeema);

//In Typescript we can have either default constructor or parameterized constructor but not both
class Employee1{
  id:number;
  name:string;
  address:string;
 constructor(id:number,name:string,address:string){
   this.id=id;
   this.name=name;
   this.address=address;
 }
}
let emeema1 = new Employee1(101,"Emeema","Bengaluru");
console.log(emeema1);

//Creating method inside class and calling the method

class Employee2{
  id:number;
  name:string;
  address:string;
 constructor(id:number,name:string,address:string){
   this.id=id;
   this.name=name;
   this.address=address;
 }

getNameWithAddress():string{
  // return this.name + " " + this.address; concatenation
  return `${this.name} stays at ${this.address}`; //string interpolation 
  
}
}
let emeema2 = new Employee2(101,"Emeema","Bengaluru");
console.log(emeema2.getNameWithAddress());

//Access Modifiers: public, private, protected

class Employee3{
   #id:number; //can be accessed only within the class
  public name:string; //can be accessed anywhere
  protected address:string; //can be accessed within the class and derived class

 constructor(id:number,name:string,address:string){
   this.#id=id;
   this.name=name;
   this.address=address;
 }
 getNameWithAddress():string{
  // return this.name + " " + this.address; concatenation
  return `${this.name} stays at ${this.address}`; //string interpolation 
  
}
}
let emeema3 = new Employee3(101,"Emeema","Bengaluru");
console.log(emeema3.name); //accessible
//console.log(emeema3.#id); //gives error as #id is private
//console.log(emeema3.address); //gives error as address is protected

//Inheritance
class Manager extends Employee3{
  constructor(id:number,name:string,address:string){
    super(id,name,address);
  }
}
let anu = new Manager(102,"Anu","Chennai");
anu.name; //accessible
//anu.address; //gives error as address is protected
//anu.#id; //gives error as #id is private
let mike = new Employee3(103,"Mike","Mumbai");
mike.name; //accessible
console.log(mike.getNameWithAddress()); //accessible
//you can still access getNameWithAddress method because manager class is derived from Employee3 class 

//Static members
class Employee4{
  #id: number;
  protected name: string;
  address: string;
  static getEmployeeCount(): number {
    return 50;
  }
  constructor(id:number,name:string,address:string){
    this.#id=id;
    this.name=name;
    this.address=address;
  }
}

Employee4.getEmployeeCount(); //accessing static method without creating object of class
let emeema4 = new Employee4(101,"Emeema","Bengaluru");
console.log(Employee4.getEmployeeCount());

//Get and set properties
class Employee5{
  #id: number;
  protected name: string;
  address: string;

get empId():number{
  return this.#id;
}
set empId(id:number){
  this.#id=id;
}
  constructor(id:number,name:string,address:string){
    this.#id=id;
    this.name=name;
    this.address=address;
  }
}
let emeema5 = new Employee5(101,"Emeema","Bengaluru");
emeema5.empId=104; //using set property to set the id
console.log(emeema5.empId); //using get property to get the id

//Interface implementation in class
interface Address{
  street:string;
  city:string;
  state:string;
  pin:number;
}
class Employee6 {
  id:number;
  name:string;
  address:Address; //using interface as datatype

 constructor(id:number,name:string,address:Address){
   this.id=id;
   this.name=name;
   this.address=address;
 }
}

let employee6 = new Employee6(101,"Emeema",{street:"MG Road", city:"Bengaluru", state:"Karnataka", pin:560001});
console.log(employee6);

//Import and export which is ES module concept
import {Login} from './interface';
import {User} from './interface';
//import * as USERLogin from './interface'; //another way of importing all but then need to use USERLogin.User and USERLogin.Login(not recommended way)
class Employee7 implements Login {
  id:number;
  name:string;
  address:string;

 constructor(id:number,name:string,address:string){
   this.id=id;
   this.name=name;
   this.address=address;
 }

 login(): User {
   return {name:this.name, id:this.id, email:""};
 }
}

let emeema7 = new Employee7(101,"Emeema","Bengaluru");
console.log(emeema7.login());