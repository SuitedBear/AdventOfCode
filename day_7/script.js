// from http://adventofcode.com/2015/day/7
const fs = require('fs');

let inputArrayRaw = [];
let inputArray = [];
let valueArray = [];

const checkValue = (str) => {
	if (!str) {
		return str;
	} else if (str.match(/^[0-9]+$/)) {
		return Number(str);
	} else if (_val = valueArray.find(_row => _row[0] === str)) {
		return _val[1];
	}
	return -1;
}

const computeOutput = (_row) => {
	let output = 666;
	let a = checkValue(_row[0]);
	let b = checkValue(_row[2]);
	const mask = 0xffff;
	switch (_row[1]) {
		case 'AND':
			output = a & b;
			break;
		case 'OR':
			output = a | b;
			break;
		case 'LSHIFT':
			output = (a << b) & mask;
			break;
		case 'RSHIFT':
			output = a >>> b;
			break;
		case 'NOT':
			output = (~b) & mask;
			break;
		default:
			output = b;
	}
	return [_row[3], output];
}

const valueVariable = (row) => {
	if (checkValue(row[3]) < 0) {
		if (checkValue(row[0]) < 0) {
			let _line = inputArray.findIndex(line => line[3] === row[0]);
			valueVariable(inputArray[_line]);
		}
		if (checkValue(row[2]) < 0) {
			let _line = inputArray.findIndex(line => line[3] === row[2]);
			valueVariable(inputArray[_line]);
		}
		valueArray.push(computeOutput(row));		
	}
}

const day_7 = (input) => {
	try {
		inputArrayRaw =  fs.readFileSync(input, encoding='utf8').split('\n');
	}
	catch(err) {
		console.log('error reading input file: \n', err);
	}
	inputArrayRaw.pop();
	inputArray = inputArrayRaw.map(line => {
			let temp = line.split(' ');
			while (temp.length < 5) {
				temp.unshift(null);
			}
			temp.splice(3, 1);
			return temp;
		});	
	inputArray.forEach(_row => valueVariable(_row));
	let temp = checkValue('a');
	console.log('"a" first run: ', temp);
	valueArray = [['b', temp]];
	inputArray.forEach(_row => valueVariable(_row));
	console.log('b:', checkValue('b'));
	console.log('"a" second run: ', checkValue('a'));
}

day_7('./input.txt');
