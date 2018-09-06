// from http://adventofcode.com/2015/day/5
const fs = require('fs');

let lightGrid = [];

const lightController = (x1, y1, x2, y2, state) => {
	for (i=x1; i<=x2; i++) {
		for (j=y1; j<=y2; j++) {
			switch (state) {
				case 0:
					lightGrid[i][j] = 0;
					break;
				case 1:
					lightGrid[i][j] = 1;
					break;
				case 2:
					if (lightGrid[i][j] === 1) {
						lightGrid[i][j] = 0;
					} else {
						lightGrid[i][j] = 1;
					}
			}
		}
	}
}

const lightController2 = (x1, y1, x2, y2, state) => {
	for (i=x1; i<=x2; i++) {
		for (j=y1; j<=y2; j++) {
			switch (state) {
				case 0:
					if (lightGrid[i][j] > 0) {
						lightGrid[i][j] -= 1;
					}
					break;
				case 1:
					lightGrid[i][j] += 1;
					break;
				case 2:
					lightGrid[i][j] += 2;
			}
		}
	}
}

const lightsUp = (input) => {
	
	for (i=0; i<1000; i++) {
		lightGrid[i] = [];
		for (j=0; j<1000; j++) {
			lightGrid[i][j] = 0;
		}
	}

	fs.readFile(input, (err, data) => {
		if (err) {
			console.log("error reading input file: \n", err);
		}
		const rawInstructions = data.toString('utf8').split('\n');
		const instructions = rawInstructions.map((line) => {
			_newLine = line.replace('through ', '').replace(/,/g, ' ');
			newLine = _newLine.replace('turn off', '0')
							  .replace('turn on', '1')
							  .replace('toggle', '2');
			return newLine;
		});
		let instructionsArray = instructions.map(line => {
				return line.split(' ').map(_str => parseInt(_str));
			});
		instructionsArray.forEach(line => {
			lightController2(line[1], line[2], line[3], line[4], line[0]);
		})
		//counting lit lights
		let litLights = 0;
		litLights = lightGrid.reduce((lit, verse) => {
			let verseLit = verse.reduce(((_lit, col) => {
				return _lit + col;
			}), 0)
			return lit + verseLit;
		}, 0);
		console.log(litLights);
	})
}

lightsUp('./input.txt');