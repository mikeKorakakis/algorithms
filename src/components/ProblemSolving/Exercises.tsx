import { Box, Typography } from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

export interface Props {}

const Exercises: React.FC<Props> = () => {
	return (
		<>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h5" gutterBottom>
					Exercises Section 6.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>Frequency Counter</p>
					<p>
						1. Write a function called <b>sameFrequency. </b>Given
						two positive integers, find out if the two numbers have
						the same frequency of digits.
					</p>
					<p>Your solution MUST have the following complexities:</p>
					<p>Time: O(N)</p>
					<p>Sample Input:</p>
					<p>sameFrequency(182,281) // true</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={2}
					defaultValues={["182", "281"]}
				>
					{`function sameFrequency(num1, num2){
                        var n1 = num1.toString();
                        var n2 = num2.toString();
                        if(n1.length !== n2.length) return false;
                        var frequencyCounter1 = {};
                        var frequencyCounter2 = {};
  
                        for (var num of n1){
                            frequencyCounter1[num] ? frequencyCounter1[num]++ : frequencyCounter1[num] = 1;
}
                        for (var num of n2){
                            frequencyCounter2[num] ? frequencyCounter2[num]++ : frequencyCounter2[num] = 1;
                        }
                        for (var fq in frequencyCounter1){
                            if(!frequencyCounter2[fq]) return false;
                            if(frequencyCounter2[fq] !== frequencyCounter1[fq]) return false;

                        }                        
                        return true;

                    }`}
				</FunctionExcecution>
                <br></br>
				<FunctionExcecution
					inputCount={2}
					defaultValues={["182", "281"]}
				>
					{`function sameFrequency(num1, num2){
                        let strNum1 = num1.toString();
                        let strNum2 = num2.toString();
                        if(strNum1.length !== strNum2.length) return false;
                        
                        let countNum1 = {};
                        let countNum2 = {};
                        
                        for(let i = 0; i < strNum1.length; i++){
                          countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
                        }
                        
                        for(let j = 0; j < strNum1.length; j++){
                          countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
                        }
                        
                        for(let key in countNum1){
                          if(countNum1[key] !== countNum2[key]) return false;
                        }
                       
                        return true;

                    }`}
				</FunctionExcecution>

				<Typography variant="subtitle2" gutterBottom>
					<p>Frequency Counter - Multiple Pointers</p>

					<p>
						2. Implement a function called,{" "}
						<strong>areThereDuplicates</strong> which accepts a{" "}
						<strong>variable number of arguments, </strong>and
						<em> </em>checks whether there are any duplicates among
						the arguments passed in.&nbsp; You can solve this using
						the frequency counter pattern OR the multiple pointers
						pattern.
					</p>
					<p>Examples:</p>
					<p>areThereDuplicates(1,2,3) // false</p>
					<p>areThereDuplicates('a','b','c','a') // true</p>
				</Typography>
				<br></br>
				<p>Frequency Counter</p>

				<FunctionExcecution
					inputCount={4}
					defaultValues={["a", "b", "c", "b"]}
				>
					{`    function areThereDuplicates() {
      let collection = {}
      for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
      }
      for(let key in collection){
        if(collection[key] > 1) return true
      }
      return false;
    }`}
				</FunctionExcecution>
				<p>Multiple Pointers</p>
				<FunctionExcecution
					inputCount={4}
					defaultValues={["a", "b", "c", "b"]}
				>
					{`function areThereDuplicates(...args){
                        
   args.sort((a,b) => a > b);
   let start = 0;
   let next = 1;
   while(next < args.length){
     if(args[start] === args[next]){
         return true
     }
     start++
     next++
   }
   return false

}`}
				</FunctionExcecution>
				<p>One Liner</p>
				<FunctionExcecution
					inputCount={4}
					defaultValues={["a", "b", "c", "b"]}
				>
					{`function areThereDuplicates(){
    return new Set(arguments).size !== arguments.length;
   return false

}`}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<p> Multiple Pointers - averagePair</p>

					<p>
						3. Write a function called <b>averagePair.</b> Given a
						sorted array of integers and a target average, determine
						if there is a pair of values in the array where the
						average of the pair equals the target average. There may
						be more than one pair that matches the average target.
					</p>

					<p>
						<b>Bonus Constraints:</b>
					</p>

					<p>Time: O(N)</p>

					<p>Space: O(1)</p>

					<p>Sample Input:</p>

					<p>averagePair([1,2,3], 2.5) // true</p>
					<p>averagePair([], 4) // true</p>
					<p>averagePair([1,3,3,5,6,7,10,12,19], 8) // true</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={2}
					defaultValues={["[1,2,3,4,5,6]", 6]}
				>
					{`
                    function averagePair(arr, val){
                     if (arr.length < 2) return false
                     var i = 0;
                     var j = arr.length - 1;

                     while (i < j) {
                        let avg = (arr[i]+arr[j]) / 2 
                         if (avg > val){
                             j--;
                         }else if (avg < val){
                             i++;
                         }else{
                             return true
                         }
                     }
  
   
                     return false;
                    }
                    `}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<p> Multiple Pointers - isSubsequence</p>

					<p>
						4. Write a function called
						<strong> isSubsequence</strong> which takes in two
						strings and checks whether the characters in the first
						string form a subsequence of the characters in the
						second string. In other words, the function should check
						whether the characters in the first string appear
						somewhere in the second string,{" "}
						<strong>without their order changing.</strong>
					</p>
					<p>Examples: </p>

					<p>isSubsequence('hello', 'hello world') // true</p>
					<p>isSubsequence('sing', 'sting') // true</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={2}
					defaultValues={["hello", "hello world"]}
				>
					{`function isSubsequence(str1, str2){
                        if(str1.length > str2.length) return false

                   
                        let i =0;
                        let j=0;
                        while(i < str1.length){
                                while(j < str2.length){
                                if(str1[i] == str2[j]){
                                    i++
                                    if(i == str1.length-1){return true}
                                }
                                if(j == str2.length-1){return false}
                                j++
                            }
                      
                        }
                        return false

}`}
				</FunctionExcecution>
                <br></br>
				<FunctionExcecution
					inputCount={2}
					defaultValues={["hello", "hello world"]}
				>
					{`    function isSubsequence(str1, str2) {
      var i = 0;
      var j = 0;
      if (!str1) return true;
      while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
      }
      return false;
    

}`}
				</FunctionExcecution>
				<p>Recursion</p>
				<FunctionExcecution
					inputCount={2}
					defaultValues={["hello", "hello world"]}
				>
					{`
                        function isSubsequence(str1, str2) {
                            if(str1.length === 0) return true
                            if(str2.length === 0) return false
                            if(str2[0] === str1[0]) return  arguments.callee(str1.slice(1), str2.slice(1))  
                            return  arguments.callee(str1, str2.slice(1))
                          }
`}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<p> Sliding Window - maxSubarraySum</p>

					<p>
						5. Given an array of integers and a number, write a
						function called <b>maxSubarraySum</b>, which finds the
						maximum sum of a subarray with the length of the number
						passed to the function.{" "}
					</p>

					<p>
						Note that a subarray must consist of <i>consecutive</i>{" "}
						elements from the original array. In the first example
						below, [100, 200, 300] is a subarray of the original
						array, but [100, 300] is not.
					</p>

					<p>maxSubarraySum([100,200,300,400], 2) // 700</p>
					<p>maxSubarraySum([-340-2-6-1], 2) // 700</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={2}
					defaultValues={["[100,200,300,400]", 2]}
				>
					{`
                    function maxSubarraySum(arr, val){
                    
                    if (arr.length < val ) return null;
                    var max = 0;
                    for (var i=0; i < val; i++){
                        max += arr[i]
                    }
                    var tempMax = max;

                    for(var i = 1; i <= arr.length - val; i++){
                        tempMax = tempMax - arr[i-1] + arr[i + val -1]
                        if(tempMax > max)
                        {
                            max = tempMax
                        }
                    }
                    return max;
                    }

`}
				</FunctionExcecution>
                <br></br>
				<FunctionExcecution
					inputCount={2}
					defaultValues={["[100,200,300,400]", 2]}
				>
					{`
                        function maxSubarraySum(arr, num){
                            if (arr.length < num) return null;
                         
                            let total = 0;
                            for (let i=0; i<num; i++){
                               total += arr[i];
                            }
                            let currentTotal = total;
                            for (let i = num; i < arr.length; i++) {
                               currentTotal += arr[i] - arr[i-num];
                               total = Math.max(total, currentTotal);
                            }
                            return total;
                        }

`}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<p>Sliding Window - minSubArrayLen</p>

					<p>
						6. Write a function called <b>minSubArrayLen</b> which
						accepts two parameters - an array of positive integers
						and a positive integer.{" "}
					</p>

					<p>
						This function should return the minimal length of a{" "}
						<b>contiguous</b> subarray of which the sum is greater
						than or equal to the integer passed to the function. If
						there isn't one, return 0 instead.<br></br>Examples:
					</p>

					<p>
						minSubArrayLen([2,3,1,2,4,3], 7) // 2 because [4,3] is
						the smallest subarray
					</p>
					<p>
						minSubArrayLen([2,1,6,5,4], 9) // 2 because [5,4] is the
						smallest subarray
					</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={2}
					defaultValues={["[4,3,3,8,1,2,3]", 11]}
				>
					{`
        function minSubArrayLen(arr, val){
        if(arr.length === 0) return 0
  
        var minLength = 0;
        var sum = 0;
        while(sum < val){
            sum += arr[minLength]
            minLength++;
            if(minLength === arr.length && sum < val){return 0}
        }


        var j = minLength-1;
        var i = 0;
        var tempLength = minLength;
        while (j <= arr.length){
         
            while(sum - arr[i] >= val){
                sum = sum - arr[i]                
                i++
                tempLength--;
                if(tempLength < minLength){
                    minLength = tempLength 
                }
                
            }
            j++;
            tempLength++;
            sum = sum + arr[j]
         
        }

        
        return minLength;
            
    }
`}
				</FunctionExcecution>
                <br></br>
				<FunctionExcecution
					inputCount={2}
					defaultValues={["[4,3,3,8,1,2,3]", 11]}
				>
					{`
            function minSubArrayLen(nums, sum) {
                let total = 0;
                let start = 0;
                let end = 0;
                let minLen = Infinity;
               
                while (start < nums.length) {
                  // if current window doesn't add up to the given sum then 
                      // move the window to right
                  if(total < sum && end < nums.length){
                    total += nums[end];
                          end++;
                  }
                  // if current window adds up to at least the sum given then
                      // we can shrink the window 
                  else if(total >= sum){
                    minLen = Math.min(minLen, end-start);
                          total -= nums[start];
                          start++;
                  } 
                  // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
                  else {
                    break;
                  }
                }
               
                return minLen === Infinity ? 0 : minLen;
              }
`}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<p>Sliding Window - findLongestSubstring</p>

					<p>
						7. Write a function called <b>findLongestSubstring, </b>
						which accepts a string and returns the length of the
						longest substring with all distinct characters.
					</p>

					<p>findLongestSubstring('') // 0</p>
					<p>findLongestSubstring('rithmschool') // 7</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={1}
					defaultValues={["thisisawesome"]}
				>
					{`
                    function findLongestSubstring(str){
                        var longest = 0;
                        var sub = "";
                        for (var letter of str){
                            if (!sub.includes(letter)){
                                sub = sub.concat(letter)
                            }else{
                                longest = sub.length;
                                break
                            }
                        }

                        var i = 0;
                        var j = longest ;
                        var tempLongest = longest;
                        while (j < str.length){
                            if(sub.includes(str[j])){
                                tempLongest -= sub.indexOf(str[j]) +1
                                sub = sub.substring(sub.indexOf(str[j])+1)
                            }
                            
                            sub = sub.concat(str[j])
                            tempLongest++;  
                            j++
                            if(tempLongest > longest){
                                longest = tempLongest
                            }
                        }
                        return longest;
                    }
`}
				</FunctionExcecution>
                <br></br>
				<FunctionExcecution
					inputCount={1}
					defaultValues={["thisisawesome"]}
				>
					{`
               function findLongestSubstring(str) {
                let longest = 0;
                let seen = {};
                let start = 0;
               
                for (let i = 0; i < str.length; i++) {
                  let char = str[i];
                  if (seen[char]) {
                    start = Math.max(start, seen[char]);
                  }
                  // index - beginning of substring + 1 (to include current in count)
                  longest = Math.max(longest, i - start + 1);
                  // store the index of the next char so as to not double count
                  seen[char] = i + 1;
                }
                return longest;
              }
`}
				</FunctionExcecution>
			</Box>
		</>
	);
};

export default Exercises;
