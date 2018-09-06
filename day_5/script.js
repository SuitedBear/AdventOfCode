// from http://adventofcode.com/2015/day/5
const fs = require('fs');

const isAVovel = (_char) => {
	const vovels = 'aeiou';
	for (j=0; j<5; j++) {
		if (_char === vovels.charAt(j)) {
			return true;
		}
	}
	return false
}

const containsThreeVovels = (_string) => {
	let counter = 0;
	for (i=0, len=_string.length; i<len; i++) {
		if (isAVovel(_string.charAt(i))) {
			counter++;
		}
	}
	if (counter >= 3) {
		return true;
	}
	return false;
}

const containsDoubleLetter = (_string) => {
	for (i=0, len=(_string.length-1); i<len; i++) {
		if (_string.charAt(i) === _string.charAt(i+1)) {
			return true;
		}
	}
	return false;
}

const containsForbiddenString = (_string) => {
	let test = _string.search('ab') 
			 + _string.search('cd') 
			 + _string.search('pq')
			 + _string.search('xy');
	if (test === -4) {
		return false;
	}
	return true;
}

const containsAPair = (_string) => {
	for (i=0, len=_string.length-2; i<len; i++) {
		let pair = _string.slice(i, i+2);
		let rest = _string.slice((i+2));
		if (rest.search(pair) !== -1) {
			return true;
		}
	}
	return false;
}

const containsDoubleLetterWithBreak = (_string) => {
	for (i=0, len=(_string.length-2); i<len; i++) {
		if (_string.charAt(i) === _string.charAt(i+2)) {
			return true;
		}
	}
	return false;
}

const checkIfNice = (_sum, _string) => {
	let nice = true;
	if (!containsDoubleLetterWithBreak(_string) || !containsAPair(_string)) {
		nice = false;
	}
	if (nice) _sum++;
	return _sum;
}

const niceStrings = (input) => {
	fs.readFile(input, (err, data) => {
		if (err) {
			console.log("error reading input file: \n", err);
		}
		const strings = data.toString('utf8').split('\n');
		console.log(strings.reduce(checkIfNice, 0));
	})
}

niceStrings('./input.txt');