// from http://adventofcode.com/2015/day/2
const fs = require('fs');

const licznik = (arr) => {
	let presentDimensions = arr.map((e) => parseInt(e)).sort((a,b) => a-b);
	return presentDimensions;
}

fs.readFile('./input.txt', (err, data) => {
	if (err) {
		console.log("error reading input file: \n", err);
	}
	const dimensionArray = data.toString('utf8').split("\n").map((e) => e.split("x"));
	dimensionArray.pop();
	let presentsArray = dimensionArray.map(licznik);
	let i = 0;
	let paperLength = 0;
	let ribbonLength = 0;
	while (i < presentsArray.length) {
		ribbonLength += ( 2*presentsArray[i][0] + 2*presentsArray[i][1] 
				+ presentsArray[i][0]*presentsArray[i][1]*presentsArray[i][2] );
		paperLength += ( 3*presentsArray[i][0]*presentsArray[i][1] 
				+ 2*presentsArray[i][1]*presentsArray[i][2] 
				+ 2*presentsArray[i][0]*presentsArray[i][2] );
		i++;
	}
	console.log("paper length: " + paperLength);
	console.log("ribbon length: " + ribbonLength);
})
