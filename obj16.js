// singleton (if we declare as literals then singleton nahi banta hai, constructors se banega toh singleton hamesha banega singleton)

// object.create (this is called constructor method where singleton is created )

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Hitesh",
    "full name": "Hitesh choudhary",
    [mySym] : "mykey1",
    age: 18 ,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday","Saturday"]
}

// console.log(jsUser.full name); syntax error and you cannnot access keys with space 
// and there is no chance of accessing value full name using dot method

// only method for accessing with spaces is 

//console.log(jsUser["full name"]); for accessing full name this method is used 

// console.log(typeof jsUser.mySym) this is wrong syntax for accessing symbol

//console.log(jsUser[mySym]) this is correct way 

                            // hitesh sir's code 

/*
 // singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo()); */