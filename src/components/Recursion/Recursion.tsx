import { Box, Typography } from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

const Recursion: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Recursion
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What is recursion.
				</Typography>
				<Typography variant="h6" gutterBottom>
					A Process (a function in our case) that calls itself.
					<br></br>
					It's Everywhere.
					<ul>
						<li>JSON.parse/ JSON.stringify</li>
						<li>
							document.getElementById and DOM traversal algorithms
						</li>
						<li>Object traversal</li>
						<li>Complex data structrures</li>
						<li>
							It's sometimes a cleaner alternative to iteration
						</li>
						<li>Call Stack</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					How recursive functions work
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					Invoke the same function with a different input until you
					reach your base case!
					<br></br>
					Base case is the condition when the recursion ends.
					<br></br>
					<strong>
						This is the most important concept to understand.
					</strong>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Two essential parts of a recursive function!
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>Base Case</li>
						<li>Different Input</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Our first recursive function
				</Typography>
				<FunctionExcecution inputCount={1} defaultValues={[10]}>
					{`
                function countDown(num){
                    if(num <=0 ){
                        console.log("All done");
                        return;
                    }
                    console.log(num);
                    num--;
                    arguments.callee(num)
                }
                `}
				</FunctionExcecution>
				<Typography variant="h6" gutterBottom>
					Example
				</Typography>
				<FunctionExcecution inputCount={1} defaultValues={[10]}>
					{`
                function sumRange(num){
                    if(num === 1 ){
                       return 1;
                    }
                   return num + arguments.callee(num - 1)
                }
                `}
				</FunctionExcecution>
				<Typography variant="h6" gutterBottom>
					Factorial
				</Typography>
				<FunctionExcecution inputCount={1} defaultValues={[10]}>
					{`
                function factorial(num){
                   if(num === 1) return  1;
                   return arguments.callee(num - 1)
                }
                `}
				</FunctionExcecution>
				<Typography variant="h6" gutterBottom>
					Where things go wrong
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>No base case</li>
						<li>
							Forgetting to return or returning the wrong thing!
						</li>
						<li>Stack Overflow!</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Helper Method Recursion
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<pre>
						{`
                        function outer(input){
                            var outerScopedVariable = []

                            function helper(helperInput){
                                //modify the outerScopedVariable
                                helper(helperInput--)
                            }

                            helper(input)

                            return outerScopedVariable;
                        }
                        `}
					</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Let's try to collect all of the odd values in an array!
				</Typography>
				<FunctionExcecution
					inputCount={1}
					defaultValues={["[1,2,3,4,5,6,7,8,9]"]}
				>
					{`
                        function collectOddValues(arr){
                            var result = []

                            function helper(helperInput){
                                //modify the outerScopedVariable
                               if(helperInput.length === 0){
                                   return;
                               }

                               if(helperInput[0] % 2 !== 0 ){
                                   result.push(helperInput[0])
                               }

                               helper(helperInput.slice(1))
                            }

                            helper(arr)

                            return result;
                        }
                        `}
				</FunctionExcecution>
				<Typography variant="h6" gutterBottom>
					Pure Recursion
				</Typography>
				<FunctionExcecution
					inputCount={1}
					defaultValues={["[1,2,3,4,5,6,7,8,9]"]}
				>
					{`
                        function collectOddValues(arr){
                            var newArr = []

                         if(arr.length === 0 ){
                             return newArr;
                         }

                         if(arr[0] % 2 !== 0) {
                             newArr.push(arr[0])
                         }

                         newArr = newArr.concat(arguments.callee(arr.slice(1)))
                         return newArr;
                        }
                        `}
				</FunctionExcecution>
                <Typography variant="h6" gutterBottom>
					Pure Recursion Tips
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>For arrays, use methods like slice, the sperad operator, and concat tha make copies of arrays so you do not mutate them</li>
						<li>
							Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make  copies of strings.
						</li>
						<li>To make copies of objects use Object.assign, or the spread operator</li>
					</ul>
				</Typography>
			</Box>
		</>
	);
};

export default Recursion;
