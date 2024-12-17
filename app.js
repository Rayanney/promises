function checkIfString(result){
    return new Promise ((resolve, reject) =>{
        if (typeof result === "string"){
            resolve ('this is a string')
        }
        else {
            reject ('not a string')
        }

    })
 }



