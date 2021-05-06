import { Box, Typography } from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

const RadixSort: React.FC = () => {

    
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Radix Sort
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					Comparison Sorts
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Average Time Complexity</strong>
					<ul>
						<li>Bubble Sort - O(n^2)</li>
						<li>Insertion Sort - O(n^2)</li>
						<li>selection Sort - O(n^2)</li>
						<li>Quick Sort - O(n log(n))</li>
						<li>Merge Sort - O(n log(n))</li>
					</ul>
					<p>Can we do better?</p>
					<p>Yes but not by making comparisons</p>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Radix Sort
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>
							Radix sort is a special sorting algorithm that works
							on list of numbers
						</li>
						<li>It never makes comparisons between elements!</li>
						<li>
							It exploits the fact that informationn about the
							size of a numver is encoded in the number of digits
						</li>
						<li>More digits means a bigger number</li>
					</ul>

					<br></br>
					<strong>How does it work</strong>
					<br></br>

					<p>
						[ 1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637,
						29]
					</p>
					<span>
						we pick the last digit and group them in buckets
					</span>
					<table className="mytable">
						<thead>
							<tr>
								<th>0</th>
								<th>1</th>
								<th>2</th>
								<th>3</th>
								<th>4</th>
								<th>5</th>
								<th>6</th>
								<th>7</th>
								<th>8</th>
								<th>9</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
								<td></td>
								<td>902</td>
								<td>593</td>
								<td>4</td>
								<td></td>
								<td>
									86<br></br>
									4386<br></br>
									3556<br></br>
									1556<br></br>
								</td>
								<td>
									6637<br></br>
									8157<br></br>7
								</td>
								<td>408</td>
								<td>29</td>
							</tr>
						</tbody>
					</table>
					<p>then we put them in a list</p>
					<p>
						[902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408,
						29]
					</p>
					<p>Then we group based on the second digit</p>
					<table className="mytable">
						<thead>
							<tr>
								<th>0</th>
								<th>1</th>
								<th>2</th>
								<th>3</th>
								<th>4</th>
								<th>5</th>
								<th>6</th>
								<th>7</th>
								<th>8</th>
								<th>9</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									408<br></br>7<br></br>4<br></br>
									902<br></br>
								</td>
								<td></td>
								<td>29</td>
								<td>9637</td>
								<td></td>
								<td>
									8157<br></br>
									3556<br></br>
									1556<br></br>
								</td>
								<td></td>
								<td></td>
								<td>
									86<br></br>
									4386<br></br>
								</td>
								<td>593</td>
							</tr>
						</tbody>
					</table>
					<p>
						[902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86,
						593]
					</p>
					<p>Then we do it for the third digit</p>
					<table className="mytable">
						<thead>
							<tr>
								<th>0</th>
								<th>1</th>
								<th>2</th>
								<th>3</th>
								<th>4</th>
								<th>5</th>
								<th>6</th>
								<th>7</th>
								<th>8</th>
								<th>9</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									86<br></br>
									29<br></br>7<br></br>4<br></br>
								</td>
								<td>8157</td>
								<td></td>
								<td>4386</td>
								<td>408</td>
								<td>
									593<br></br>
									3556<br></br>
									1556<br></br>
								</td>
								<td>9637</td>
								<td></td>
								<td></td>
								<td>902</td>
							</tr>
						</tbody>
					</table>
					<p>
						[4, 7, 29, 86, 8157, 4386, 408, 1556, 3556, 593, 9637,
						902]
					</p>
					<p>Then we do it for the last digit</p>
					<table className="mytable">
						<thead>
							<tr>
								<th>0</th>
								<th>1</th>
								<th>2</th>
								<th>3</th>
								<th>4</th>
								<th>5</th>
								<th>6</th>
								<th>7</th>
								<th>8</th>
								<th>9</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									902<br></br>
									593<br></br>
									408<br></br>
									86<br></br>
									29<br></br>7<br></br>4<br></br>
								</td>
								<td>1556</td>
								<td></td>
								<td>3556</td>
								<td>4386</td>
								<td></td>
								<td></td>
								<td></td>
								<td>8157</td>
								<td>9637</td>
							</tr>
						</tbody>
					</table>
					<p>
						[ 4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157,
						9637]
					</p>
				</Typography>

				<br></br>
				<iframe
					title="quick sort"
					style={{ width: "100%", height: "500px", scale: "0.5" }}
					src="https://visualgo.net/en/sorting"
				></iframe>

				<br></br>
				<br></br>

				<Typography variant="subtitle2" gutterBottom>
					<strong>Radix Helper </strong>
					<p>
						In order to implement radix sort, it's helpful to build
						a few helper functions first:
					</p>
					<p>
						getDigit(num, place) - returns the digit in num at the
						given place value
					</p>
					<p>digitCount(num) - returns the number of digits in num</p>
					<p>
						mostDigits(num) - Given an array of numbers, returns the
						number of digits in the largest numbers in the list
					</p>
					<p>getDigit(12345, 0); answer 5</p>
					<p>digitCount(12345); answer 5</p>
                    <p>mostDigits([12, 34, 56, 111]); answer 3</p>
				</Typography>
				<FunctionExcecution inputCount={2} defaultValues={[12345, 3]}>
					{`
                    function getDigit(num, idx){
                      //return Math.floor(num/10**(idx ))%10
                      return Math.floor(Math.abs(num) / Math.pow(10,idx)) % 10;
                    }
`}
				</FunctionExcecution>
				<br></br>
				<FunctionExcecution inputCount={1} defaultValues={[12345]}>
					{`
                    function digitCount(num){                       
                     
                      return Math.floor(Math.log10(Math.abs(num)) +1 ) ;
                    }
`}
				</FunctionExcecution>
				<br></br>
                <FunctionExcecution inputCount={1} defaultValues={["[12, 34, 56, 111]"]}>
					{`
                    function mostDigits(arr){

                        function digitCount(num){                       
                     
                            return Math.floor(Math.log10(Math.abs(num)) +1 ) ;
                          }
                        
                      max = arr[0]
                      for(var i = 0; i < arr.length; i++){
                          Math.max(max, arr[i])
                      }
                      return digitCount(max) ;
                    }
`}
				</FunctionExcecution>
				<br></br>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Radix Sort Pseudocode </strong>
					<ul>
						<li>Define a function that accepts a list of numbers</li>
                        <li>Figure out how many digits the largest number has</li>
                        <li>Loop from k=0 up to largest number of digits</li>
                        <ul>
                            <li>Create buckets for each digit(0 to 9)</li>
                            <li>place each number in the correpsonding bucket based on its kth digit</li>
                        </ul>
                        <li>Replace our existing array with values in our backets, starting with 0 and going up to 9</li>
                        <li>Return list at the end!</li>
					</ul>
				</Typography>
				<FunctionExcecution
					inputCount={1}
					defaultValues={["[ 1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]"]}
				>
					{`
                    function radixSort(arr){

                        const  digitCount = (num) =>  Math.floor(Math.log10(Math.abs(num)) +1 ) ;
                        const getDigit = (num, idx) => Math.floor(Math.abs(num) / Math.pow(10,idx)) % 10;
                        function mostDigits(arr){

                            function digitCount(num){                       
                         
                                return Math.floor(Math.log10(Math.abs(num)) +1 ) ;
                              }
                            
                          max = arr[0]
                          for(var i = 0; i < arr.length; i++){
                              Math.max(max, arr[i])
                          }
                          return digitCount(max) ;
                        }

                        var most = mostDigits(arr)
                        for ( let k = 0; k <  most; k++){
                        //     let bucket = []
                         
                        //     for (let num in arr){
                        //         const digit = getDigit(arr[num], k);
                        //         bucket[digit] =  bucket[digit] ? bucket[digit].concat(arr[num]) : [].concat(arr[num])
                        //     }
                        //    arr = []
                        //     for (let el in bucket)
                        //     {                                
                        //         arr = arr.concat(bucket[el])
                        //     }

                            let digitBuckets = Array.from({length: 10}, () => [])
                            for(let i = 0; i < arr.length; i++){
                                let digit = getDigit(arr[i], k);
                                digitBuckets[digit].push(arr[i])
                            }
                            arr = [].concat(...digitBuckets);
                        }
                       return arr

                    }

                    
`}
				</FunctionExcecution>

				<Typography variant="subtitle2" gutterBottom>
					<strong>Radix Sort Big O</strong>
					<ul>
						<li>Time Complexity (Best) O(n*k)</li>
						<li>Time Complexity (Average) O(n*k)</li>
						<li>Time Complexity (Worst) O(n*k)</li>
						<li>Space Complexity O(n+k)</li>
						<li>
							if numbers are unique and evenly distributed then k becomes log(n)
                            and so complexity is nlog(n)
						</li>
					</ul>
                    <ul>
                        <li>n - length of array</li>
                        <li>k - number of digits(average)</li>
                    </ul>
				</Typography>
			</Box>
		</>
	);
};

export default RadixSort;
