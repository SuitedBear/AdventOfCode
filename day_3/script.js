// from http://adventofcode.com/2015/day/3
const fs = require('fs');

const checkCoords = (_x, _y, coordsArray) => {
	for (j=0, aLen = coordsArray.length; j < aLen; j++) {
		if (coordsArray[j][0] === _x) {
			if (coordsArray[j][1] === _y) {
				return true;
			}
		}
	}
	return false;
}

const houseArray = (moveset, existingArray) => {
	let x = 0;
	let y = 0;
	let houseCoordsArray = [];
	if (existingArray === undefined) {
		houseCoordsArray.push([x, y]);		
	} else {
		let temp = [];
		houseCoordsArray = temp.concat(existingArray);
	}
	for (i = 0, len = (moveset.length); i < len; i++) {
		if (moveset.charAt(i) === '>') {
			x++;
		} else if (moveset.charAt(i) === '<') {
			x--;
		} else if (moveset.charAt(i) === '^') {
			y--;
		} else if (moveset.charAt(i) === 'v') {
			y++;
		}
		if (!checkCoords(x, y, houseCoordsArray)) {
			houseCoordsArray.push([x, y]);
		}
	}
	return houseCoordsArray;
}

const day3 = (input) => {
	fs.readFile(input, (err, data) => {
		if (err) {
			console.log("error reading input file: \n", err);
		}
		moveset = data.toString('utf8');
		santaSet = '';
		roboSantaSet = '';
		for (i=0, len=moveset.length; i<len; i++) {
			if (i%2) {
				santaSet += moveset.charAt(i);
			}
			else {
				roboSantaSet += moveset.charAt(i);
			}
		}
		let satnaHousesArray = houseArray(santaSet);
		let roboSantaHousesArray = houseArray(roboSantaSet, satnaHousesArray);
		console.log(roboSantaHousesArray.length);
	})
}

day3('./input.txt');
