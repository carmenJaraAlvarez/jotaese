async function login(req,res,callback){
    try{
        const user= await User.findOne({email: req.body.email})
        const ismatch=await user.comparePassword(req.body.password)
        if(!isMatch) return res.status(401).send('incorrect psw')
        const payload ={id:user._id, email: user.email}
        const token= await jwt.sign(payload, config.secret, {})
        user.token=token
        const sucess= await user.save()
        res.json({token})
    }catch(err){
        callback(err)
    }

}