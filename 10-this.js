console.log(this)

const user = {
    name: 'myname',
    greet: function(){console.log('Hi '+this.name)}
}

user.greet()

const anotherGreet=user.greet
anotherGreet()

const user2={
    name: 'user2',
}
user2.greet=user.greet
user2.greet()

this.name='name of this?'//this this works on console and brownser
const anotherGreet2=user.greet
anotherGreet2()

//setting this manually
const anotherGreet3=user.greet.bind({name: 'this is a bound one'})//time execution: future (return function)
anotherGreet3()

const anotherGreet4=user.greet.call({name: 'this is a bound one'})//time execution: now


const anotherGreet5=user.greet.apply({name: 'this is a bound one'})//time execution: now

user.greet.call({name: 'this is a bound one whitout const'})//time execution: now