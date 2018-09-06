const fs = require('fs');
console.log('start');

fs.readFile('./input.txt', (err, data) => {
	if (err) {
		console.log(err);
	}
	console.time('part1');
	const directions = data.toString('utf8');
	const directionsArray = directions.split('');
	const answer = directionsArray.reduce((acc, currentValue) => {
		if(currentValue === '(') {
			return acc += 1;
		} else if (currentValue === ')') {
			return acc -= 1;
		}
	}, 0)
	console.log('floor:', answer);
	console.timeEnd('part1');
});

fs.readFile('./input.txt', (err, data) => {
	if (err) {
		console.log(err);
	}
	console.time('part2');
	const directions = data.toString('utf8');
	const directionsArray = directions.split('');
	let accumulator = 0;
	let counter = 0;
	const answer = directionsArray.some((currentItem) => {
		if (currentItem === '(') {
			accumulator += 1;
		} else if (currentItem === ')') {
			accumulator -= 1;
		}
		counter++;
		return accumulator < 0;
	})
	console.log('basement at:', answer);
	console.timeEnd('part2');
});