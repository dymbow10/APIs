const name = 'a';
let age = 15;
let hobbies = true;

age = 20;

const summarize2 = (userName, userAge, userHobby) => {
    return ("Name = " + userName + " age = " + userAge + " has hobby = " + userHobby);
}

//const add = (a,b) => a+b;
//const addOne = a => a+1;

const addRandom = () => 1+2;

console.log(addRandom());

console.log(summarize2(name,age,hobbies));