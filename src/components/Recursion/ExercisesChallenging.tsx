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
					<p>reverse('awesome') // 'emosewa'</p>
				</Typography>
				<br></br>

				<FunctionExcecution inputCount={1} defaultValues={["awesome"]}>
					{`function reverse(str){
                     

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
					<p>isPalindrome('awesome') // false</p>
				</Typography>

				<FunctionExcecution inputCount={1} defaultValues={["awesome"]}>
					{`    function isPalindrome(num) {
                        
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
				<p>// someRecursive([1,2,3,4], isOdd) // true</p>
				<FunctionExcecution
					inputCount={1}
					defaultValues={["[1,2,3,10]", () => {}]}
				>
					{`
                    function someRecursive(arr, fn ){
                       
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
						capitalizeFirst(['car','taco','banana']); //
						['Car','Taco','Banana']
					</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={1}
					defaultValues={["[1, 2, 3, [4, 5] ]"]}
				>
					{`
                    function capitalizeFirst(arr){
                   
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
					<p>fib(4) // 3</p>
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
					<p>nestedEvenSum(obj1); // 6</p>
					<p>nestedEvenSum(obj2); // 10</p>
				</Typography>
				<br></br>

				<FunctionExcecution inputCount={1} defaultValues={[10]}>
					{`function nestedEvenSum(num){
                  
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
					<p>// let words = ['i', 'am', 'learning', 'recursion'];</p>
					<p>
						// capitalizedWords(words); // ['I', 'AM', 'LEARNING',
						'RECURSION']
					</p>

					<p>nestedEvenSum(obj1); // 6</p>
					<p>nestedEvenSum(obj2); // 10</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={1}
					defaultValues={["['i', 'am', 'learning', 'recursion']"]}
				>
					{`function capitalizeWords(arr){
                  
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

				<FunctionExcecution inputCount={1} defaultValues={[10]}>
					{`function stringifyNumbers(obj){
                  
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
					<p>collectStrings(obj) // ["foo", "bar", "baz"]</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={1}
					defaultValues={[" ['foo', 'bar', 'baz']"]}
				>
					{`function stringifyNumbers(obj){
                  
                    }
`}
				</FunctionExcecution>
			</Box>
		</>
	);
};

export default ExercisesChallenging;
