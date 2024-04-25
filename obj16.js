// singleton (if we declare as literals then singleton nahi banta hai, constructors se banega toh singleton hamesha banega singleton)

// object.create (this is called constructor method where singleton is created )

// object literals

const jsUser = {
    name : "Hitesh",
    age: 18 ,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday","Saturday"]
}

console.log(jsUser.email)