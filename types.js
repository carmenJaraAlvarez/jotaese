const x=50
console.log(typeof x)

const arr = []
if(arr==false){
    console.log("empty array equal false")
}
//objects************************************************
const o = new Object()
o.isObject=true
o.name ='my o'
o.greet = function(){
    console.log('hi')
}

const o2 = {}
o2.isObject = true
o2['name'] ='my o'
const key = 'greet'
o2[key]=function(){
    console.log('hi')
}


const o3 ={
    isObject:true,
    name :'my o',
    greet :function(){
    console.log('hi')
}

}
    console.log(o3.name)
//objects mutations************************************************

const obj= {
    a:'a',
    b:'b',
}

const anotherO=obj

obj.a='change'

console.log(anotherO.a)

//copy
const obj2 = { a: 1 };
const copy = Object.assign({}, obj2);//shallow copy
console.log(copy); // { a: 1 }
obj2.a= 2;
console.log(obj2); // { a: 2 }
console.log(copy); // { a: 1 }

//deep copy
function deepCopy(obj){
    const copy = Object.assign({}, obj)
    const keys = Object.keys(obj)
    const res = {}

    for (let i=0;i<keys.length; i++)
    {
        const key=keys[i]
        if(typeof obj[key]==='object')
        {
            res[key]= deepCopy(obj[key]);
        }
        else
        {
            res[key]=obj[key]
        }
    }
    return res;
}
const obj3= {
    a:'a',
    b:{ba: 'ba', bb: 'bb'},
}
console.log(obj3.b.bb);

const newObj= deepCopy(obj3)
console.log(newObj.b.bb);
obj3.b.bb='jhgvfytfdy'
console.log(obj3.b.bb);
console.log(newObj.b.bb);