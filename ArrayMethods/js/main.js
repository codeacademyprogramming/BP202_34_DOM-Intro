let numbers = [45,10,5,3,14];


numbers.forEach((x,i)=>{
    console.log(i+" - "+x)
})



let newNumbers = [];

numbers.forEach(x=>{
    newNumbers.push(x*2)
})


newNumbers = numbers.map(x=>x*2);

console.log("=================");

newNumbers.forEach(x=>{
    console.log(x)
})

class Student{
    constructor(name,surname,groupNo){
        this.Name = name;
        this.Surname = surname;
        this.GroupNo = groupNo;
    }
};

class Human{
    constructor(name,surname){
        this.Name = name;
        this.Surname = surname;
    }
}

let students = [new Student('Zakir','Haciyev','qovulub'),new Student('Hikmet','Abbasov','BP202'),new Student('Nermin','Quluzade','AP555')];

let humans = students.map(x=>new Human(x.Name,x.Surname))

console.log(humans)

console.log(numbers.filter(x=>x>10))


