// from http://adventofcode.com/2015/day/9
const fs = require('fs');

const GetDataArray = (input) => {
	let inputString = fs.readFileSync(input, encoding='utf8');
	let inputLinesArray = inputString.split('\n');
	inputLinesArray.pop();
	let inputArray = inputLinesArray.map(line => {
		let newLine = line.replace('to ', '').replace('= ', '').split(' ');
		newLine[2] = parseInt(newLine[2]);
		return newLine;
	});
	return inputArray;
}

const getSingleCityArray = (_from, _fligtDistancesArray) => {
	let singleCityArray = [];
	_fligtDistancesArray.forEach(line => {
		let destination = null;
		if (line[0] === _from) {
			destination = line[1];
		} else if (line[1] === _from) {
			destination = line[0];
		} 
		if (destination !== null) {
			let destinationInArray = false;
			singleCityArray.forEach(_line => 
				_line[0] === destination ? destinationInArray=true : null);
			if (!destinationInArray) {
				singleCityArray.push([destination, line[2]]);
			}
		}
	})
	return singleCityArray;
}

const Day9 = (input) => {
	const fligtDistancesArray = GetDataArray(input);
	let startLocation = fligtDistancesArray[0][0];
	let distance = 0;
	let route = [startLocation, ];

	return getSingleCityArray('Tambi', fligtDistancesArray);
}

console.log(Day9('./input.txt'));