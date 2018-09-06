// from http://adventofcode.com/2015/day/4
const md5 = require('md5');


const input = 'yzbqklnj';

const checkHash = (_hash) => {
	for (i = 0; i<6; i++) {
		if (_hash.charAt(i) !== '0') {
			return false;
		}
	}
	return true;
}

const findHash = (_input) => {
	let i = 0;
	let hashNotFound = true;
	let key = _input;
	let hash = '';
	while(hashNotFound) {
		key = _input.concat(i.toString());
		hash = md5(key);
		if (checkHash(hash)) {
			hashNotFound = false;
			console.log(i);
		}
		i++;
	}	
	return hash;
}

console.log(findHash(input));
