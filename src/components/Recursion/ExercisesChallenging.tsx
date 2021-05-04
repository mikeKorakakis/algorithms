import { Box, Typography } from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

export interface Props {}

const ExercisesChallenging: React.FC<Props> = () => {
	return (
		<>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h5" gutterBottom>
					Exercises Section 9.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>reverse</p>
					<p>
						Write a recursive function called{" "}
						<strong>reverse</strong> which accepts a string and
						returns a new string in reverse.
					</p>
					<p>reverse('awesome') 'emosewa'</p>
				</Typography>
				<br></br>

				<FunctionExcecution inputCount={1} defaultValues={["awesome"]}>
					{`function reverse(str){
                        if(str.length === 0) return ""
                        return str[str.length-1].concat(arguments.callee(str.substring(0,str.length-1)))

                    }`}
				</FunctionExcecution>
				<br></br>
				<FunctionExcecution inputCount={1} defaultValues={["awesome"]}>
					{`function reverse(str){
                     	if(str.length <= 1) return str;
                         return arguments.callee(str.slice(1)) + str[0];
                    }`}
				</FunctionExcecution>
				<br></br>

				<Typography variant="subtitle2" gutterBottom>
					<p>isPalindrome</p>

					<p>
						Write a recursive function called{" "}
						<strong>isPalindrome</strong> which returns true if the
						string passed to it is a palindrome (reads the same
						forward and backward). Otherwise it returns false.
					</p>
					<p>isPalindrome('awesome') false</p>
					<p>isPalindrome('tacocat') true</p>
				</Typography>

				<FunctionExcecution inputCount={1} defaultValues={["tacocat"]}>
					{`    
                    function isPalindrome(str) {
                            if (str.length === 0 || str.length === 1 ) return true

                            return (str[0] === str[str.length - 1]) && arguments.callee(str.substring(1, str.length - 1))
                        }
    `}
				</FunctionExcecution>
				<br></br>
				<FunctionExcecution inputCount={1} defaultValues={["tacocat"]}>
					{`    
                    function isPalindrome(str) {
                        if(str.length === 1) return true;
                        if(str.length === 2) return str[0] === str[1];
                        if(str[0] === str.slice(-1)) return arguments.callee(str.slice(1,-1))
                        return false;
                        }
    `}
				</FunctionExcecution>
				<p>someRecursive</p>
				<p>
					Write a recursive function called{" "}
					<strong>someRecursive</strong> which accepts an array and a
					callback. The function returns true if a single value in the
					array returns true when passed to the callback. Otherwise it
					returns false.
				</p>
				<p> someRecursive([1,2,3,4], isOdd) true</p>
				<FunctionExcecution
					inputCount={2}
					defaultValues={["[4,6,8]", "return val % 2 !== 0"]}
				>
					{`
                    function someRecursive(arr, fn ){
                        const f = new Function("val", fn)
                      
                        if (arr.length === 0) return false

                        return f(arr[0]) || arguments.callee(arr.slice(1), fn)

                        }
                        `}
				</FunctionExcecution>
				<br></br>

				<FunctionExcecution
					inputCount={2}
					defaultValues={["[4,6,8]", "return val % 2 !== 0"]}
				>
					{`
                    function someRecursive(array, fn ){
                        const f = new Function("val", fn)
                      
                        if (array.length === 0) return false;
                        if (f(array[0])) return true;
                        return arguments.callee(array.slice(1),fn);

                        }
                        `}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<p> flatten</p>

					<p>
						Write a recursive function called{" "}
						<strong>flatten</strong> which accepts an array of
						arrays and returns a new array with all values
						flattened.
					</p>
					<p>flatten([1, 2, 3, [4, 5] ]) [1, 2, 3, 4, 5]</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={1}
					defaultValues={["[[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]"]}
				>
					{`
                    function flatten(arr){
                        if(arr.length === 0) return []
                        return (typeof(arr[0] === "object") && arr[0].length > 0) 
                        ? (arguments.callee(arr[0])).concat(arguments.callee(arr.slice(1)))
                        : [arr[0]].concat(arguments.callee(arr.slice(1)))
                    }
                    `}
				</FunctionExcecution>
				<br></br>
				<FunctionExcecution
					inputCount={1}
					defaultValues={["[[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]"]}
				>
					{`
                    function flatten(oldArr){
                        var newArr = []
                        for(var i = 0; i < oldArr.length; i++){
                                if(Array.isArray(oldArr[i])){
                                    newArr = newArr.concat(arguments.callee(oldArr[i]))
                                } else {
                                    newArr.push(oldArr[i])
                                }
                            } 
                            return newArr;
                    }
                    `}
				</FunctionExcecution>

				<Typography variant="subtitle2" gutterBottom>
					<p> capitalizeFirst</p>

					<p>
						Write a recursive function called{" "}
						<strong>capitalizeFirst</strong>. Given an array of
						strings, capitalize the first letter of each string in
						the array.
					</p>
					<p>
						{" "}
						capitalizeFirst(['car','taco','banana']);
						['Car','Taco','Banana']
					</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={1}
					defaultValues={['["car","taco","banana"]']}
				>
					{`
                    function capitalizeFirst(arr){
                        if (arr.length === 0) return arr;
                        var upper = arr[0][0].toUpperCase() + arr[0].slice(1);
                        upper = [upper]
                        return upper.concat(arguments.callee(arr.slice(1)))
                    }
                    `}
				</FunctionExcecution>
                <br></br>
                <FunctionExcecution
					inputCount={1}
					defaultValues={['["car","taco","banana"]']}
				>
					{`
    function capitalizeFirst (array) {
        if (array.length === 1) {
          return [array[0][0].toUpperCase() + array[0].substr(1)];
        }
        const res = arguments.callee(array.slice(0, -1));
        const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
        res.push(string);
        return res;
      }
                    `}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<p>nestedEvenSum</p>
					<p>
						Write a recursive function called{" "}
						<strong>nestedEvenSum</strong>. Return the sum of all
						even numbers in an object which may contain nested
						objects.
					</p>
					<p>fib(4) 3</p>
					<pre>
						{`
                    var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};
`}
					</pre>
					<p>nestedEvenSum(obj1); 6</p>
					<p>nestedEvenSum(obj2); 10</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={1}
					defaultValues={[
						`{"a": 2,
                            "b": {"b": 2, "bb": {"b": 3, "bb": {"b": 2}}},
                            "c": {"c": {"c": 2}, "cc": 'ball', "ccc": 5},
                            "d": 1,
                            "e": {"e": {"e": 2}, "ee": 'car'}
                          };`,
					]}
				>
					{`
                    function nestedEvenSum(obj){
                        let sum = 0;
                        for (var o in obj){
                            var object = obj[o]
                            if (!isNaN(object) && (Number.parseInt(object) % 2) === 0){
                                sum += Number.parseInt(object);
                            }else if (typeof(object) === "object"){
                                sum +=  Number.parseInt(arguments.callee(object))
                            }
                        }
                        return sum
                    }
`}
				</FunctionExcecution>
				<br></br>
				<FunctionExcecution
					inputCount={1}
					defaultValues={[
						`{"a": 2,
                            "b": {"b": 2, "bb": {"b": 3, "bb": {"b": 2}}},
                            "c": {"c": {"c": 2}, "cc": 'ball', "ccc": 5},
                            "d": 1,
                            "e": {"e": {"e": 2}, "ee": 'car'}
                          };`,
					]}
				>
					{`
                     function nestedEvenSum (obj, sum=0) {
                        for (var key in obj) {
                            if (typeof obj[key] === 'object'){
                                sum += arguments.callee(obj[key]);
                            } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
                                sum += obj[key];
                            }
                        }
                        return sum;
                    }
`}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<p>capitalizedWords</p>
					<p>
						Write a recursive function called{" "}
						<strong>capitalizeWords</strong>. Given an array of
						words, return a new array containing each word
						capitalized.
					</p>
					<p> let words = ['i', 'am', 'learning', 'recursion'];</p>
					<p>
						capitalizedWords(words); ['I', 'AM', 'LEARNING',
						'RECURSION']
					</p>

					<p>nestedEvenSum(obj1); 6</p>
					<p>nestedEvenSum(obj2); 10</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={1}
					defaultValues={['["i", "am", "learning", "recursion"]']}
				>
					{`function capitalizeWords(arr){
                         if (arr.length === 0) return arr;
                         var upper = arr[0].toUpperCase();
                         upper = [upper]
                         return upper.concat(arguments.callee(arr.slice(1)))
                    }
`}
				</FunctionExcecution>
				<br></br>
				<FunctionExcecution
					inputCount={1}
					defaultValues={['["i", "am", "learning", "recursion"]']}
				>
					{`
                    function capitalizeWords (array) {
                        if (array.length === 1) {
                        return [array[0].toUpperCase()];
                        }
                        let res = arguments.callee(array.slice(0, -1));
                        res.push(array.slice(array.length-1)[0].toUpperCase());
                        return res;
                    
                    }
`}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<p>stringifyNumbers</p>
					<p>
						Write a function called&nbsp;
						<code>stringifyNumbers</code>&nbsp;which takes in an
						object and finds all of the values which are numbers and
						converts them to strings. Recursion would be a great way
						to solve this!
					</p>
					<pre>
						{`
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
`}
					</pre>
					<p>stringifyNumbers(obj)</p>
					<pre>
						{`
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
`}
					</pre>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={1}
					defaultValues={[
						`{
    "num": 1,
    "test": [],
    "data": {
        "val": 4,
        "info": {
            "isRight": true,
            "random": 66
        }
    }
}`,
					]}
				>
					{`   function stringifyNumbers(obj){
                        let obb = {};
                        for (var o in obj){
                            var object = obj[o]
                                if (!isNaN(object) && typeof(object) !== "object" && typeof(object) !== "boolean" ){
                                Object.assign(obb,{[o]: object.toString()})
                            }else if (typeof(object) === "object"  && !Array.isArray(object)){
                               Object.assign(obb, {[o]: arguments.callee(object)})
                            }else{
                                Object.assign(obb,{[o]: object})
                            }
                        }
                        return obb
                    }
`}
				</FunctionExcecution>
				<br></br>
				<FunctionExcecution
					inputCount={1}
					defaultValues={[
						`{
    "num": 1,
    "test": [],
    "data": {
        "val": 4,
        "info": {
            "isRight": true,
            "random": 66
        }
    }
}`,
					]}
				>
					{`   
                        function stringifyNumbers(obj) {
                            var newObj = {};
                            for (var key in obj) {
                              if (typeof obj[key] === 'number') {
                                newObj[key] = obj[key].toString();
                              } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                                newObj[key] = arguments.callee(obj[key]);
                              } else {
                                newObj[key] = obj[key];
                              }
                            }
                            return newObj;
                          }
`}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<p>collectStrings</p>
					<p>
						Write a function called&nbsp;<code>collectStrings</code>
						&nbsp;which accepts an object and returns an array of
						all the values in the object that have a typeof string
					</p>
					<pre>
						{`
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
`}
					</pre>
					<p>collectStrings(obj) ["foo", "bar", "baz"]</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={1}
					defaultValues={[
						`{
                        "stuff": "foo",
                        "data": {
                            "val": {
                                "thing": {
                                    "info": "bar",
                                    "moreInfo": {
                                        "evenMoreInfo": {
                                            "weMadeIt": "baz"
                                        }
                                    }
                                }
                            }
                        }
                    }`,
					]}
				>
					{`
                        function collectStrings(obj){
                        let arr = [];
                        for (var o in obj){
                            // console.log( obj[o])
                            var object = obj[o]
                            if (typeof(object)  === 'string'){
                                arr = arr.concat(object);
                            }else if (typeof(object) === "object"){
                                arr = arr.concat(arguments.callee(object))
                            }
                        }
                        return arr
                    }
`}
				</FunctionExcecution>
				<br></br>
				<FunctionExcecution
					inputCount={1}
					defaultValues={[
						`{
                        "stuff": "foo",
                        "data": {
                            "val": {
                                "thing": {
                                    "info": "bar",
                                    "moreInfo": {
                                        "evenMoreInfo": {
                                            "weMadeIt": "baz"
                                        }
                                    }
                                }
                            }
                        }
                    }`,
					]}
				>
					{`
                          function collectStrings(obj) {
                            var stringsArr = [];
                         
                            function gatherStrings(o) {
                                for(var key in o) {
                                    if(typeof o[key] === 'string') {
                                        stringsArr.push(o[key]);
                                    }
                                    else if(typeof o[key] === 'object') {
                                        return gatherStrings(o[key]);
                                    }
                                }
                            }
                         
                            gatherStrings(obj);
                         
                            return stringsArr;
                        }
`}
				</FunctionExcecution>
				<br></br>
				<FunctionExcecution
					inputCount={1}
					defaultValues={[
						`{
                        "stuff": "foo",
                        "data": {
                            "val": {
                                "thing": {
                                    "info": "bar",
                                    "moreInfo": {
                                        "evenMoreInfo": {
                                            "weMadeIt": "baz"
                                        }
                                    }
                                }
                            }
                        }
                    }`,
					]}
				>
					{`
                            function collectStrings(obj) {
                                var stringsArr = [];
                                for(var key in obj) {
                                    if(typeof obj[key] === 'string') {
                                        stringsArr.push(obj[key]);
                                    }
                                    else if(typeof obj[key] === 'object') {
                                        stringsArr = stringsArr.concat(arguments.callee(obj[key]));
                                    }
                                }
                             
                                return stringsArr;
                            }
`}
				</FunctionExcecution>
			</Box>
		</>
	);
};

export default ExercisesChallenging;
