import {
	Box,
	Grid,
	TextField,
	Typography,
} from "@material-ui/core";
import React, { useState } from "react";


function isAlphaNumeric(str: string) {
	var code, i, len;

	for (i = 0, len = str.length; i < len; i++) {
		code = str.charCodeAt(i);
		if (
			!(code > 47 && code < 58) && // numeric (0-9)
			!(code > 64 && code < 91) && // upper alpha (A-Z)
			!(code > 96 && code < 123)
		) {
			// lower alpha (a-z)
			return false;
		}
	}
	return true;
}

function charCount(str: string) {
	var obj: any = {};
	for (var char of str) {
		if (isAlphaNumeric(char)) {
			char = char.toLowerCase();
			obj[char] = ++obj[char] || 1;
		}
	}
    return obj;
}

const ProblemSolving: React.FC = () => {
	const [text, setText] = useState("");


	return (
		<>
			<Typography variant="h5" gutterBottom>
				Problem Solving
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					Algorithm
				</Typography>
				<Typography variant="h6" gutterBottom>
					A set of steps to accomplish a certain task.
				</Typography>
				<Typography variant="h6" gutterBottom>
					Problem Solving
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>Undestand the problem.</li>
						<li>Explore concrete examples.</li>
						<li>Break it down.</li>
						<li>Solve/Simplify.</li>
						<li>Look back and refactor.</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Understand the problem.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>Can I restate the problem in my own words?</li>
						<li>What are the inputs that go into the problem?</li>
						<li>
							What are the outputs that should come from the
							solution to the problem.
						</li>
						<li>
							Can the outputs be determined from the inputs? In
							other words, do I have enough information to solve
							the problem? (You may not be able to answer this
							question until you set about solving the problem.
							That's OK; it's still worth considering the question
							in this early stage).
						</li>
						<li>
							How should I label the important pieces of data that
							are a part of the problem.
						</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Write a function which takes 2 numbers an returns their sum.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>Can I restate the problem in my own words?</li>
						"Implement addition"
						<li>What are the inputs that go into the problem?</li>
						Ints, Floats, What about string for large numbers
						<li>
							What are the outputs that should come from the
							solution to the problem.
						</li>
						Ints, Floats, What about string for large numbers
						<li>
							Can the outputs be determined from the inputs? In
							other words, do I have enough information to solve
							the problem? (You may not be able to answer this
							question until you set about solving the problem.
							That's OK; it's still worth considering the question
							in this early stage).
						</li>
						<li>
							How should I label the important pieces of data that
							are a part of the problem.
						</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Write a function which takes in a string and returns counts
					of each character in the string.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					{`charCount("hello") //{h:1, e:1,l:2,o:1}`}
					<ul>
						<li>Start with simple exampels</li>
						<li>Progress with more complex exmaples</li>
						<li>Explore examples with empty inputs?</li>
						<li>Explore examples with invalid inputs?</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Write a function which takes in a string and returns counts
					of each character in the string.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					{`charCount("hello") //{h:1, e:1,l:2,o:1}`}
					<ul>
						<li>Start with simple exampels</li>
						<li>Progress with more complex exmaples</li>
						<li>Explore examples with empty inputs?</li>
						<li>Explore examples with invalid inputs?</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Write a function which takes in a string and returns counts
					of each character in the string.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					Break it down<br></br>
					Explicitly write out the steps you need to take.<br></br>
					This forces you to think about the code you'll write before
					you write it, and helps you catch any lingering conceptual
					issues or misunderstundings before you dive in and have to
					worry about the details (e.g. language syntax) as well.
					<br></br>
					<br></br>
					function charCount(str)
					{
						<ul>
							<li>//make object to return at end</li>
							<li>
								//loop over string for each character...
								<br></br>
								//if char is a key in object, add one to the
								count<br></br>
								//if char is no in object, add it to object and
								set value to 1 //if char is something else
								(space, period, etc.) don't do anything
							</li>
							<li>//return object at end</li>
						</ul>
					}
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					Simplify<br></br>
					Explicitly write out the steps you need to take.<br></br>
					This forces you to think about the code you'll write before
					you write it, and helps you catch any lingering conceptual
					issues or misunderstundings before you dive in and have to
					worry about the details (e.g. language syntax) as well.
					<br></br>
					<br></br>
					function charCount(str)
					{
						<ul>
							<li>//make object to return at end</li>
							{` var result = {}`}
							<li>
								//loop over string for each character...
								<pre>
									{`for(var i = 0; i < str.length; i++){
var char = str[i]
if result[char] > 0{
    result[char]++;
elseif{

}
}else{
    result[char] = 1;
}
}`}
								</pre>
								<br></br>
								//if char is a key in object, add one to the
								count<br></br>
								//if char is no in object, add it to object and
								set value to 1<br></br>
								//if char is something else (space, period,
								etc.) don't do anything
							</li>
							<li>//return object at end</li>
						</ul>
					}
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					Look back & refactor<br></br>
					Congrats of solving it, but you're not done!
					<br></br>
					<ul>
						<li>Can you check the result?</li>
						<li>Can you derive the result differently?</li>
						<li>
							Cant you use the result or method for some other
							problem?
						</li>
						<li>
							Can you improve the performance of you solution?
						</li>
						<li>Can you think of other ways to refactor?</li>
						<li>How have other people solved this problem?</li>
					</ul>
					<pre>
						{`function charCount(str){
var obj = {};
for(var i = 0; i < str.length; i++){
var char = str[i].toLowerCase();
if (/[a-z0-9]/.test(char){
    obj[char]++;
}else{
    obj[char] = 1;
}
}`}
					</pre>
					<pre>
						{`function charCount(str){
var obj = {};
for(var char of str){
var char = char.toLowerCase();
if (/[a-z0-9]/.test(char){
    obj[char]++ || 1;
}
return obj;

}`}
					</pre>
					<pre>
						{`function charCount(str){
var obj = {};
for(var char of str){
    if (isAlphanumeric(char)){
    char = char.toLowerCase();
    obj[char] = ++obj[char] || 1;
}
return obj;

}`}
					</pre>
					<pre>
						{`
function isAlphaNumeric(str) {
var code, i, len;

for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
    return false;
    }
}
return true;
};
                        `}
					</pre>
				</Typography>
                <Grid container>
				<Grid item xs={6}>
					<pre>
						{`function charCount(str){
var obj = {};
for(var char of str){
    if (isAlphanumeric(char)){
    char = char.toLowerCase();
    obj[char] = ++obj[char] || 1;
}
return obj;

}`}
					</pre>
				</Grid>
				<Grid item xs={6}>
					<Grid container direction="column" alignItems="flex-start">
						<TextField
							style={{ width: "100px", margin: "20px" }}
							value={text}
							onChange={(event) =>
								setText(event?.target?.value)
							}
						></TextField>
						<Box style={{ paddingLeft: "20px" }}>
							<Typography variant="subtitle2" gutterBottom>
								{JSON.stringify(charCount(text))}
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Grid>
			</Box>
		</>
	);
};

export default ProblemSolving;
