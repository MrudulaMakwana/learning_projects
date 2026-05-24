// crealing the interview

// logical and and or 

let a=true;
let b=true;

// &&   both variable are true then return true else return false
// || if both are false then return false else return true

console.log(a && b)
console.log(a && false)
// 1st value is false then it never check the second value
console.log(false && true)

function getName(name)
{
    return name;
}

console.log(a && getName('Mrudula'))    //answer for this is====== Mrudula=======
console.log(false && getName('Bajrangi'))   //1st variable is false so it never check second condition

// OR    ||
console.log('OR : ',a || b)
console.log('OR : ',false || b)
console.log("OR : ", a || false)
console.log("OR : ", false || false)
console.log("OR :" , false ||  getName('Bajrangi'))
console.log("OR :" , true ||  getName('Bajrangi'))   // return true



// Template Literals
let name1='Mrudula'
let name2='Shivam'
console.log('without template literals ','my name is ',name1 ,'and my brother name is',name2)
console.log(`with template literals My name is ${name1} and my Brother Name is ${name2}`)



// Ternary Operator   :   condition ? statement1 : statement2 

let showRecipeOne=true;
function getRecipeOne(recipeName)
{
    return recipeName
}

function getRecipeTwo(recipeName)
{
    return recipeName
}

/*if(showRecipeOne)
{
    console.log(getRecipeOne('Fruits Juices'));
}
else{
    console.log(getRecipeTwo('ShreeKhand'));
}
console.log(`Using Ternary Operator`, showRecipeOne ? getRecipeOne('fruits juices') : getRecipeTwo('shreekhand'));



// Destructuring 
const id=1;
const productName='Product Apple Watch';
const rating=5;

const product={
    id:id,
    productName:productName,
    rating:rating,
}

// when key and value are same then simply write like in this manner see nextExample
let nextExample={
    id,
    productName,
    rating,
}
console.log(product);
console.log('Using ',nextExample);

const Product2={
    description:'jfnfnsdjknfsjnfnfsnfsnf',
    id,
    productName,
    rating,
}

// const getProduct2Description=Product2.description;
// console.log(getProduct2Description);

const {description}=Product2;   //Destructuring
console.log(description);

const arr=[1,2,3]
const [one,two,three]=arr
console.log('Array Destructuring',one,two,three);
*/

/*
// Default parameters ,spread and rest operators
function multiOfTwo(one=1,two=2)  //default value pass kari 
{
return one*two;
}
// console.log(multiOfTwo());  //trying to pass default value

console.log(multiOfTwo(10*20));

// spread

const exampleSpread=[1,2,3,4,5,6]
const expapmeSpread2=[...exampleSpread,7,8,9]
console.log(exampleSpread);
console.log(expapmeSpread2);
console.log('Expamle Spreading',[999,...exampleSpread],[...expapmeSpread2])
console.log([34654,...exampleSpread,276387,...expapmeSpread2]);


// rest operator
function getInfo(a,b,...c)
{
    console.log(a,b,c);
    return 'good morning'
}
console.log(getInfo(1,2,3));
console.log(getInfo(1,2,3,4,5,6));  //now if pass 100 argument then ? so we use rest operator 


*/

// array method

