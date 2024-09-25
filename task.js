//1st
var car= {
make :"Lambhorgini",
model :"Lambhorgini Aventador",
year: 2022
}
var freeze=Object.freeze(car);
console.log(Object.isFrozen(car));
car.model="lam";
console.log(car);
//2nd
var user={
    name:"sumedh",
    age:27,
    email:"sumedh@gmail.com"
}
console.log(Object.isFrozen(user));
//3rd
var product={
    name:"fastrack",
    category:"Smartwatch",
    price:2699
}
console.log(Object.isSealed(product));
//4th
var laptop={
    brand:"Dell",
    model:"inteli5",
    price:50390
}
console.log(Object.keys(laptop));
//5th
var Eiffeltower={
    location:"Paris",
    size:"1083ft",
    price:7799401,

}
console.log(Object.values(Eiffeltower));
//6th
var smartphone={
    brand:"Vivo",
    model:"y21",
    price:18000,
}
Object.seal(smartphone)
smartphone.price=20000
console.log(smartphone);

console.log(Object.isSealed(smartphone));
//7th
var book={
    title:"Bhagavad Gita",
    author:"Maharishi Ved Vyasa",
    publishedyear: "3rd century"
}
Object.freeze(book)
book.publishedyear="4th century";
console.log(book);
console.log(Object.isFrozen(book));
//8th
var person={
    firstname:"Sruthi",
    lastname:"Beemari",
    age:21
}
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
//9th
var course={
    title:"java fullstack",
    instructor:"10kcoders",
    duration:"6months"
}

console.log(Object.entries(course));
(delete course.duration);
console.log(course);
//10th
var employee={
    name:"sruthi",
    position:"software developer",
    salary:600000
}
Object.seal(employee)
employee.position="Analyst"
console.log(employee);
console.log(Object.keys(employee))
employee.company="tcs";
console.log(employee);
