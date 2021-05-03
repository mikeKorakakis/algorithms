import { Box, Typography } from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

export interface Props {}



const FrequencyCounter: React.FC<Props> = () => {
	return (
		<>
			
			<Box style={{ textAlign: "left" }}>
				
				<Typography variant="h5" gutterBottom>
					Frequency Counter Pattern.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					This pattern uses objects or sets to collect
					values/frequences of values. <br></br>
					This can often avoid the need for nested loops or O(N^2)
					operations with arrays/strings.
				</Typography>
<br></br>
				<Typography variant="h6" gutterBottom>
					Write a function called same, which accepts two arrays. The
					function should return true if every value in the array has
					it's corrensponding value squared in the second array. The
					frequency of values must be the same
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					same([1,2,3], [4,1,9]) //true <br></br>
					same([1,2,3], [1,9]) //false <br></br>
					same([1,2,1], [4,4,1]) //false <br></br>
					<br></br>A Naive Solution (O(n^2))
				</Typography>
				<FunctionExcecution
					inputCount={2}
					defaultValues={["[1,2,3]", "[1,4,9]"]}
				>
					{`function same(arr1, arr2){
        
    if (arr1.length !== arr2.length){
        return false;
    }
    for (let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}`}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<br></br>Refactored (O(n))
				</Typography>
				<FunctionExcecution
					inputCount={2}
					defaultValues={["[1,2,3]", "[1,4,9]"]}
				>
									{
`function same(arr1, arr2){
        
    if (arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }

    return true
}`}
				</FunctionExcecution>
<br></br>
                <Typography variant="h6" gutterBottom>
					Exercise: Given two strings, write a function to determine if the second string is an anagram 
                    of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, 
                    such as cinema, formed from iceman.<br></br>
                    ex. validAnagram('aaz', 'zaa') //true
				</Typography>
                <br></br>
                <FunctionExcecution
					inputCount={2}
					defaultValues={["aaz", "zaa"]}
				>
									{
`function validAnagram(str1, str2){
    if (str1.length !== str2.length){
        return false;
    }
    
    const lookup = {};

    

    for (let i=0; i < str1.length; i++){
        let letter = str1[i];
        //if letter exists, icrement, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1: lookup[letter] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];

        // can't find letter or letter is zero than it's not an anagram

        if (!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}`}
				</FunctionExcecution>
			</Box>
		</>
	);
};

export default FrequencyCounter;
