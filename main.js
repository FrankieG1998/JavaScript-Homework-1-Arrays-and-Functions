var first_name = "Abc";
console.log(first_name);
var num = 50;
console.log(num);

console.log(document);

var float_num = 3.14;
console.log(float_num);
var arr_num = [1,2,3,4,5];
console.log(arr_num);
var some_obj = {'yo': "yoyo"};
console.log(some_obj);

a_num = 10;
console.log(a_num);

console.log(some_random_variable); 
var some_random_variable = 'this is random variable';
console.log(some_random_variable);

let x = 5;
console.log(x);
x= 3;
console.log(x);

let y;       
console.log(y);
y = 10;
console.log(y);

const z= 100;
console.log(z);
console.log(z);

let sum_num = 10+20
console.log(sum_num);
let diff_num = 10-20
console.log(diff_num);

let find_floor = Math.floor(10.8);
console.log(find_floor);
let find_ceil = Math.ceil(10.8);
console.log(find_ceil);

let float_num2 = 3.145
let crazy_stuff = float_num2 + '6' 
console.log(crazy_stuff)

let crazy_stuff2 = float_num2 + parseFloat('6') 
console.log(crazy_stuff2)

var red_ranger = 'Jason';
var red_ranger = 'Tommy';
console.log(red_ranger);

let red_ranger1 = 'Jason1';
red_ranger1 = 'Tommy1';
console.log(red_ranger1);

function addNumbers(){
    let num = 4;
    let num2 = 5;
    return num + num2;
}
console.log(addNumbers());

function addNumbers2(num1, num2){
    return num1 + num2;
}
console.log(addNumbers2(10,25));

let sumFunction = () => {
    return 5556;
}
console.log(sumFunction());

let functionCube = num => {
    return num**3;
}
console.log(functionCube(10));
let functionCube2 = (num) => {
    return num**3;
}
console.log(functionCube2(10));

let toThePower = (num, power) => {
    return num**power;
}
console.log(toThePower(10,4));

console.log(
    (function(name){
        let hello = 'Hello ' + name;
        return hello
    })
('John'))

function determineAge(age){
    if (age<18){
        return 'minor';
    } else if (age >= 18 && age <65){
        return 'Adult'
    } else{
        return 'Senior'
    }
}
console.log(determineAge(35));
console.log(determineAge(17));

function determineAge2(age){
   return (age<18) ? 'minor': (age >= 18 && age <65)? 'Adult': 'Senior';
}

console.log(determineAge2(35));
console.log(determineAge2(17));
console.log(determineAge2(75));
console.log(determineAge2(64));

function countByOne(){
    for(let i = 0; i< 20; i++)
    {
        console.log(i);
    }
    return 'Counting stopped'
}
countByOne();
console.log(countByOne());

function countWhile(){
    let i = 0;
    let textStr = '';
    while(i < 10){
        textStr += `This number is ${i}  \n`;
        i = i +1;
    };
    return textStr;
}
console.log(countWhile());

function countDoWhile(){
    let i = 0;
    let textStr = '';
    do{
        textStr += `This number is ${i}  \n`;
        i++;
    }while(i<10);
    return textStr;
}
console.log(countDoWhile());

let names = ['jerry', 'tom', 'john', 'bash', 'misty']
console.log(names[3]);
[terry, dick, harry] = names;
console.log(dick, terry, harry);
console.log(names);
console.log(terry);

function showAllNames(){
    for (let i=0; i< names.length; i++){
        console.log(names[i]);
    }
    return 'done';
}
console.log(showAllNames());

console.log(names.forEach(element => console.log(element)));
console.log(names.forEach(i => console.log(i)));
console.log(names.toString());
console.log(typeof(names.toString()));
console.log(typeof(names));

let j_names = names.map( i => {
    if(i[0] == 'j'){
        return i;
    }else{
        return false;
    }
})
console.log(j_names);


let j_names_long = function (){
    let test_array = [];
    for (let i = 0; i<names.length; i++){
        if(names[i][0] == 'j'){
            test_array.push(names[i]);
        }
        else{
            test_array.push(false);
        }
    }
} 

console.log(j_names_long());

let long_names = names.filter(element => element.length >4)
console.log(long_names);

const nums = [3,4,5,6]
let nums_reduced = nums.reduce((accumulator, current_num) =>{
    return accumulator + current_num
})
console.log(nums_reduced);
