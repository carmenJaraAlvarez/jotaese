//////Asynchronous

function printOne(){
    console.log('one')
}
function printTwo(){
    console.log('two')
}
function printThree(){
    console.log('three')
}

setTimeout(printOne,1000)//put in bronswer api, after 1s, apis push into function queue, after that is push in js stack by event loop
setTimeout(printTwo, 0)
printThree()//this will be the first becouse is push in the stack directly
///every call to a no js function, data u object will be asynchronous.

function firstClass(callbackFunction){
    callbackFunction('hello')

}
firstClass(console.log)


function firstClassAsync(callbackFunction){
    setTimeout(function(){callbackFunction('hello async')},2000)
}
firstClassAsync(console.log)