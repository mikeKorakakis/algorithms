

const jsonParse = (str : string) => {
    let result = "error parsing"
    try {
        result = JSON.parse(str)
    }catch(err){
        console.log(err)
    }
    return result
}

export default jsonParse;