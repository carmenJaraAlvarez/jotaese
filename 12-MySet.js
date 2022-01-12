class MySet extends Set{

    constructor(arr){
        super(arr)
        this.originalArray =arr
    }

    add(val){
        super.add(val)
        console.log('added ${val}')

    }

    toArray(){
        return Array.from(this)
    }

    reset(){
        return new MySet(this.originalArray)
    }

}