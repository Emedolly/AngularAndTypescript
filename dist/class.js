"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Classes contain business logic and data together
//Creating class and properties then assigning the values to it and displaying the object using console.log
class Employee {
    id;
    name;
    address;
}
let emeema = new Employee();
emeema.id = 101;
emeema.name = "Emeema";
emeema.address = "Bengaluru";
console.log(emeema);
//In Typescript we can have either default constructor or parameterized constructor but not both
class Employee1 {
    id;
    name;
    address;
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
let emeema1 = new Employee1(101, "Emeema", "Bengaluru");
console.log(emeema1);
//Creating method inside class and calling the method
class Employee2 {
    id;
    name;
    address;
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        // return this.name + " " + this.address; concatenation
        return `${this.name} stays at ${this.address}`; //string interpolation 
    }
}
let emeema2 = new Employee2(101, "Emeema", "Bengaluru");
console.log(emeema2.getNameWithAddress());
//Access Modifiers: public, private, protected
class Employee3 {
    #id; //can be accessed only within the class
    name; //can be accessed anywhere
    address; //can be accessed within the class and derived class
    constructor(id, name, address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        // return this.name + " " + this.address; concatenation
        return `${this.name} stays at ${this.address}`; //string interpolation 
    }
}
let emeema3 = new Employee3(101, "Emeema", "Bengaluru");
console.log(emeema3.name); //accessible
//console.log(emeema3.#id); //gives error as #id is private
//console.log(emeema3.address); //gives error as address is protected
//Inheritance
class Manager extends Employee3 {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let anu = new Manager(102, "Anu", "Chennai");
anu.name; //accessible
//anu.address; //gives error as address is protected
//anu.#id; //gives error as #id is private
let mike = new Employee3(103, "Mike", "Mumbai");
mike.name; //accessible
console.log(mike.getNameWithAddress()); //accessible
//you can still access getNameWithAddress method because manager class is derived from Employee3 class 
//Static members
class Employee4 {
    #id;
    name;
    address;
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }
}
Employee4.getEmployeeCount(); //accessing static method without creating object of class
let emeema4 = new Employee4(101, "Emeema", "Bengaluru");
console.log(Employee4.getEmployeeCount());
//Get and set properties
class Employee5 {
    #id;
    name;
    address;
    get empId() {
        return this.#id;
    }
    set empId(id) {
        this.#id = id;
    }
    constructor(id, name, address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }
}
let emeema5 = new Employee5(101, "Emeema", "Bengaluru");
emeema5.empId = 104; //using set property to set the id
console.log(emeema5.empId); //using get property to get the id
class Employee6 {
    id;
    name;
    address; //using interface as datatype
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
let employee6 = new Employee6(101, "Emeema", { street: "MG Road", city: "Bengaluru", state: "Karnataka", pin: 560001 });
console.log(employee6);
//import * as USERLogin from './interface'; //another way of importing all but then need to use USERLogin.User and USERLogin.Login(not recommended way)
class Employee7 {
    id;
    name;
    address;
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    login() {
        return { name: this.name, id: this.id, email: "" };
    }
}
let emeema7 = new Employee7(101, "Emeema", "Bengaluru");
console.log(emeema7.login());
//# sourceMappingURL=class.js.map