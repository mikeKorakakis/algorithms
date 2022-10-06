// Write a function which takes in a  string  and returns counts of each character in the string.

console.log(charCount("Hi there!"));

function charCount(str) {
	// make object to return at end
	var obj = {};
	// loop over string, for each character...
	for (var char of str) {
		char = str[i].toLowerCase();
		// if (/[a-z0-9]/.test(char)) {
		if (isAlphanumeric(char)) {
			// if char is a number/letter and is a key in object, add one to count
			obj[char] = ++obj[char] || 1;
		}
	}
	return result;
	// if character is something else (space, period, etc.) don't do anything
	// return object at end
}

function isAlphanumeric(char) {
	var code = char.charCodeAt(0);
	if (
		!(code > 47 && code < 58) &&
		!(code > 64 && code < 91) &&
		!(code > 96 && code < 123)
	) {
		return false;
	}
	return true;
}
