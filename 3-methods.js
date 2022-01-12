//array.push

const arr=[]
arr.push('first')
console.log(arr.toString());
arr.push('second')
console.log(arr.toString());

//string.toUpperCase

const s='string'
s.toUpperCase()
console.log(s)//inmutable
const s1=s.toUpperCase()
console.log(s1)
console.log(s.__proto__)
console.log(s.__proto__.__proto__)


///////
//6.toString() error
const n=6
n.toString()
const b= (n instanceof Number)
console.log(b)


////

// var life until end of the function and no control two vars whith same name
//const & let life until next
//const vs let : update no or yes

let l=50;
l++
console.log(l)
l=54
console.log(l)
//global var

globalVar=49;
console.log(globalVar)