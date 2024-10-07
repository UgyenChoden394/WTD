let cat = {name:"Lucy", color:"golden", age:3};
let dog = new Object();
dog.breed = "husky";
dog.name = "jacky";
dog.isVaccinated = true;

document.getElementById("para1").innerHTML = "breed:" + dog.breed + "<br>name: " +dog["name"] + "<br>isVacinated:" + dog.isVaccinated;

delete dog.isVaccinated;
console.log(dog);
dog.age = 5;
console.log(dog);

const person = {
    fname: "tashi",
    lname: "choden",
    age: 21,
    fullname: function() {
        return this.fname + " " + this.lname
    }
};
document.getElementById("para1").innerHTML = person.fullname();