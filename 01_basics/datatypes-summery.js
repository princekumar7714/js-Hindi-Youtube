//n   primitive data types

//string , number , boolean , bigint, undefined, null, symbol

// const score = 100
// const scorevalue = 100.3

// const isLoggedIn =false
// const outsidetemp = null
// let useremail;
 
// const id = symbol ('123')
// const anotherID = symbol ('123')
// console.log(id === anotherID);

//const bignumber = 1121314444242442n

//non primitive 

// array , object function
 
const heroes = [ "krish" , "batman" , "cpaain"];

let myobj ={
    name: "prince",
    age :33
};

const myfunction = function(){
    console.log("hello world");
    
}


//console.log(typeof Bignumber);



//****************************************************** */

//stack(primitive) or heap(non primitive)

let myytname = "princerajputvlogs"
let anothername = myytname
anothername = "chaiorcode"

//console.log(myytname);
//console.log(anothername);

let userOne ={
    email:"princerajput@gamil.com",
    age:22

};

let userTwo= userOne;
userTwo.email = "princkumar@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);

