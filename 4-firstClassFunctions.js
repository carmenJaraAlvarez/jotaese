///////////////////map

const x= [0,1,2,3]
function addOne(n){return n+1}
const n2=addOne(0)
console.log(n2)

const arr=x.map(addOne)
const s=arr.toString()
console.log(s)

/////////////////filter

function isGreatterThanOne(num){return num>1}
const filtered=x.filter(isGreatterThanOne)
const s2=filtered.toString()
console.log(s2)

/////////////////Reduce

function add(num1, num2){return num1+num2}//take 2 first and sum and create a provisional new array length-1, and repite
const sum=add(1,2)
console.log(sum)
const reduced=x.reduce(add)
const s3=reduced.toString()
console.log(s3)

///////////////my first class

function map(arr, fn){
    const newArr=[]

    for(let i=0;i<arr.length;i++){
        let val=arr[i]
        newArr.push(fn(val))
    }

    return newArr
}

function addTwo(x){return x+2}

const a=[1,2,5]
const b=map(a,addTwo)
console.log(b)