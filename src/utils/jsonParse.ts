

const jsonParse = (str : string) => {
    let result = "error parsing"
   
    try {
        result = JSON.parse(str)
    }catch(err){
        if (typeof(str) == "string" ||  typeof(str) == "number"){
            return str
         }
        console.log(err)

    }
    return result
}

export default jsonParse;