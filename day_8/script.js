// from http://adventofcode.com/2015/day/8
const fs = require('fs');

const stringParser = (str) => {
	let unquoted = str.replace(/^"|"$/g, '');
	let test = unquoted.replace(/\\"/g, '"').replace(/\\\\/g, '\\')
		.replace(/\\x\w\w/g, (match) => { 
			let _str = match.replace('\\', '0');
			return String.fromCharCode(_str); 
		});
	console.log(test, test.length);
	return test.length;
}

const StringCounter = (quoted) => {
	let str = quoted.replace(/^"|"$/g, '');
	let counter = 0;
	let i = 0;
	let len = str.length;
	while (i<len) {
		if (str.charAt(i) === '\\') {
				switch (str.charAt(i+1)) {
					case '\\':
						counter++;
						i+=2;
						break;
					case '"':
						counter++;
						i+=2;
						break;
					case 'x':
						counter++;
						i += 4;
						break;
				}
		} else {
			i++;
			counter++;
		}
	}
	return counter;
}

const increasedCounter = (str) => {
	let counter = 0;
	let i = 0;
	let len = str.length;
	while (i<len) {
		switch (str.charAt(i)) {
			case '\\':
				counter+=2;
				break;
			case '"':
				counter+=2;
				break;
			default:
				counter++;
		}
		i++;
	}
	return counter+2;
}

const day_8 = (input) => {
	const inputString = fs.readFileSync(input, encoding='utf8');
	const inputArray = inputString.split('\n');
	inputArray.pop();
	let charsInString = 0;
	let charsInParsed = 0;
	let charsInIncreased = 0;
	inputArray.forEach(line => charsInString += line.length);
	inputArray.forEach(line => charsInParsed += StringCounter(line));
	inputArray.forEach(line => charsInIncreased += increasedCounter(line));
	console.log(charsInString, charsInParsed, charsInIncreased);
	console.log(charsInString - charsInParsed);
	console.log(charsInIncreased - charsInString);
}

day_8('./input.txt');