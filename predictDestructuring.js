const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output: Tesla in place 0, Mercedes in place 1
console.log(randomCar) //Tesla
console.log(otherRandomCar) //Mercedes

//const employee = {
//    name: 'Elon',
//    age: 47,
//    company: 'Tesla'
//}
//const { name: otherName } = employee;
//Predict the output: setting employee as a constant means that it is immutable; it is therefore impossible to alter the employee name. Also, name isn't defined anywhere.
//console.log(name);
//console.log(otherName);

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output... hashedPassword isn't defined anywhere
console.log(password);
console.log(hashedPassword);

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers; //2
//Predict the output: 
console.log(first == second); //false: first is 2 and second is 5
console.log(first == third); //true: first and third are both 2

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //value
console.log(secondKey); // whole secondKey array [1,5,1,8,3,3]
console.log(secondKey[0]); //place 0 in secondKey is 1
console.log(willThisWork); //place 1 in secondKey is 5


