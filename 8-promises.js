/*
//example

const url =''

node-fetch(url)
.then(
    function(res){
        return res.json()
    }
    )
.then(
    function(json){
        return ({importanData:json.importanData})
    }
    )
.then(
    function(data){
        console.log(data)
    }
    )
.catch(function(err){...}
    )

*/

//refactoring callbackhell

function login(req,res,callback){

    User.findOne({email: req.body.email})
    .then(function(user){
        return user.comparePassword(req.body.password)
    })
    .then(function(isMatch){
        if(!isMatch) res.status(401).send('incorrect psw')
        else{
             const payload ={id:user._id, email: user.email}
             jwt.sign(payload, config.secret, {})
        }
    })
    .then(function(token){
        user.token=token
        return user.save()
    })
    .then(function(){
        res.json({token})
    })
    .catch(function(err){
        return callback(err)
    })

}