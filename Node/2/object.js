const person = {
    name: 'Douglas',
    age: 30,
    greet() {
        console.log("Hi, my name is " + this.name + " and I am " + this.age + " years old")
    }
};

const printName = ({name}) => {
    console.log(name);
};

printName(person);

//const copiedPerson = {...person};
//console.log(copiedPerson);

//const hobbies = ['Sports', 'Cooking'];
//for (let hobby of hobbies){
//    console.log(hobby);
//}
//console.log(hobbies.map(hobby => 'Hobby: '+hobby));

//hobbies.push('Programming');
//const copiedArray = [...hobbies];
//console.log(copiedArray);

//const toArray = (...args) => {
//    return args;
//}

//console.log(toArray(1,2,3,4,5));