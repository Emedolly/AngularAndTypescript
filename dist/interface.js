"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "Emeema", id: 101, email: "eme@gmail.com" };
console.log(user);
let emp = { name: "Anu", id: 102, email: "", salary: 50000 };
console.log(emp);
//Object desctructuirng and array destructuring using interface
//if we want to get name and email from user object
//generally user.name and user.email
let { name: username, email } = { name: "Emeema", id: 101, email: "eme@gmail.com" }; //object destructuring
console.log(username); //if we dont want to use same variable name as in interface we can use name:username
console.log(email);
let users = [
    { name: "Emeema", id: 101, email: "d" },
    { name: "Anu", id: 102, email: "e" },
    { name: "Asha", id: 103, email: "f" },
    { name: "Sharon", id: 104, email: "g" }
];
let [user1, user2, ...restUsers] = users; //array destructuring
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(u => u.id > 102);
console.log(result);
//Interfaces are not present in the compiled JavaScript code. They are used only at compile time for type checking and are removed during the compilation process. so if we want to return the type then use classes instead of interfaces 
//# sourceMappingURL=interface.js.map