function makeArrayOfFunctions()
{
    const res=[]
    for (var i =0;i<5;i++){
        res.push(function (){ console.log(i)})
    }
    return res;
}

const arr=makeArrayOfFunctions();
//console.log(i)//error not defined
arr[0]();//5


function makeArrayOfFunctions2()
{
    const res=[]
    for (let i =0;i<5;i++){
        res.push(function (){ console.log(i)})
    }
    return res;
}

const arr2=makeArrayOfFunctions2();
//console.log(i)//error not defined
arr2[1]();//1

////////////////////////////////////////////

function makeHelloFunction(){
    var msg ='hello'
    function sayHello(){
        console.log(msg)
    }
    return sayHello
}
const launchHello=makeHelloFunction()
launchHello()

///inmediatly invoqued is not in global

const h=( function(){//no name
    var msg ='hello'
    function sayHello(){
        console.log(msg)
    }
    return sayHello
})()//invoqued
h()

//secure counter not access, no global
const counter = (function(){
    let count =0
    return {//object
    inc: function(){count =count+1},
    get: function(){console.log(count)},
    }
})()
counter.inc()
counter.inc()
counter.get()

/////////////////////iief clousure

function IIEFmakeArrayOfFunctions()
{
    const res=[]
    for (var i =0;i<5;i++){
       // res.push(function (){ console.log(i)})
       res.push(
           (function (x){
           return function(){ console.log(x)}
          })(i)
          )
    }
    return res;
}

const iief=IIEFmakeArrayOfFunctions();
iief[0]();//0