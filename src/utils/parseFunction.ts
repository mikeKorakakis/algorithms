
/* Parse a string function definition and return a function object. Does not use eval.
 * @param {string} str
 * @return {function}
 *
 * Example:
 *  var f = function (x, y) { return x * y; };
 *  var g = parseFunction(f.toString());
 *  g(33, 3); //=> 99
 */
const parseFunction = (str: string) => {
    let fn:any = () => {};
	var fn_body_idx = str.indexOf("{"),
		fn_body = str.substring(fn_body_idx + 1, str.lastIndexOf("}")),
		fn_declare = str.substring(0, fn_body_idx),
		fn_params = fn_declare.substring(
			fn_declare.indexOf("(") + 1,
			fn_declare.lastIndexOf(")")
		),
		args = fn_params.split(",");

        
        args.push(fn_body);

    try{
        fn = new Function(...args);
    }catch(err){
        throw err;
    }
	//@ts-ignore
	return fn;
};

export default parseFunction;
