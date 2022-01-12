class Set{

    constructor(array){
        this.arr=array
    }
    add(val){
        if(!this.has(val)) this.arr.push(val)
    }
    drop(val){
        //this.arr.delete(val)
        this.arr=this.arr.filter(x=> x!==val)
    }
    has(val){
        return this.arr.includes(val)
    }
    get size(){
        return this.arr.length
    }
}
const a= new Set([1,2,3])
a.add(1)
a.add(1)
console.log(a.size)
a.add(6)
console.log(a.size)
a.drop(1)
const isThere= a.has(1)
console.log(isThere)