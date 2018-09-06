//Santa's Helper
// from http://adventofcode.com/2015/day/1

const fs = require('fs');
console.log('start');
// Part 1
fs.readFile('./input.txt', (err, data) => {
	if (err) {
		console.log(err);
	}
	console.time('part1');
	const input = data.toString('utf8');
	let up = input.match(/\(/g).length;
	let down = input.match(/\)/g).length;
	let floors = up - down;
	console.log('floor: ', floors);
	console.timeEnd('part1');	
})

// Part 2
fs.readFile('./input.txt', (err, data) => {
	if (err) {
		console.log(err);
	}
	console.time('part2');
	const input = data.toString('utf8');
	floors = 0;
	for (i = 0, len = input.length; i < len; i++) {
		if ( input.charAt(i) === '(' ) {
			floors += 1;
		} else if ( input.charAt(i) === ')' ) {
			floors -= 1;
		}
	if ( floors < 0 ) {
			console.log('basement at: ', i+1);
			break;
		}
	}
	console.timeEnd('part2');		
})