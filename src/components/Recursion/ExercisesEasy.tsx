import { Box, Typography } from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

export interface Props {}

const Exercises: React.FC<Props> = () => {
	return (
		<>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h5" gutterBottom>
					Exercises Section 8.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>Power</p>
					<p>Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of <code>Math.pow()</code>&nbsp; - do not worry about negative bases and exponents.</p>
				
					<p>Sample Input:</p>
					<p>power(2,0) // 1</p>
					<p>power(2,2) // 4</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={2}
					defaultValues={["4", "2"]}
				>
					{`function power(base, exponent){
                        if(exponent === 0) return 1;
                        return base * arguments.callee(base, exponent-1)

                    }`}
				</FunctionExcecution>
                <br></br>
			

				<Typography variant="subtitle2" gutterBottom>
					<p>Frequency Counter - Multiple Pointers</p>

					<p>Write a function&nbsp;<strong>factorial</strong> which accepts a number and returns the factorial of that number. A&nbsp;factorial is the product of an integer and all the integers below it; e.g., factorial four (&nbsp;<em>4!</em>&nbsp;) is equal to 24, because 4 *&nbsp;3&nbsp;* 2 * 1 equals 24.&nbsp;<strong> factorial zero (0!) is always 1.</strong></p>
					<p>factorial(7) // 5040</p>
				</Typography>
				<br></br>
				<p>Frequency Counter</p>

				<FunctionExcecution
					inputCount={1}
					defaultValues={[4]}
				>
					{`    function factorial(num) {
                           if (num < 0 ) return 0;
                           if (num <=1 ) return 1;
                            
                            return  num * arguments.callee(num-1);
                        }
    `}
				</FunctionExcecution>
				<p>ProductOfArray</p>
                <p>Write a function called&nbsp;<code>productOfArray</code>&nbsp;which takes in an array of numbers and returns the product of them all.</p>
				<p>productOfArray([1,2,3]) // 6</p>
                <FunctionExcecution
					inputCount={1}
					defaultValues={["[1,2,3,10]"]}
				>
					{`
                    function productOfArray(arr){
                        if(arr.length === 0) return 1;

                        return arr[0] * (arguments.callee(arr.slice(1)))
                        }
                        `}
				</FunctionExcecution>
			
				<Typography variant="subtitle2" gutterBottom>
					<p> recursiveRange</p>

					<p>Write a function called <strong>recursiveRange</strong> which accepts a number and adds up all the numbers from 0 to the number passed to the function&nbsp;</p>
					<p>averagePair([1,3,3,5,6,7,10,12,19], 8) // true</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={1}
					defaultValues={[ 6]}
				>
					{`
                    function recursiveRange(num){
                        if (num === 0) return 0;

                        return num + arguments.callee(num-1);
                    }
                    `}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<p> fib</p>

					<p>Write a recursive function called <strong>fib</strong> which accepts a number and returns the <em>n</em>th number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.</p>

					<p>fib(4) // 3</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={1}
					defaultValues={[10]}
				>
					{`function fib(num){
                       if(num <= 2) return 1;

                       return  arguments.callee(num - 1) + arguments.callee(num - 2)
                    }
`}
				</FunctionExcecution>
               
			</Box>
		</>
	);
};

export default Exercises;
