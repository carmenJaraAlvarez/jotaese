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
.catch(function(err){/*handle error*/}
    )