#!/usr/bin/env node

interface Duck {
    id: number,
    height: number,
    width: number
}

let max_ducks = 20;

let max_width = 50;

let real_ducks: Duck[] = [
    { id: 0, height: 9, width: 8 },
    { id: 1, height: 9, width: 9 },
    { id: 2, height: 8, width: 5 },
    { id: 3, height: 8, width: 6 },
    { id: 4, height: 8, width: 8 },
    { id: 5, height: 7, width: 6 },
    { id: 6, height: 7, width: 6 },
    { id: 7, height: 6, width: 7 },
    { id: 8, height: 6, width: 7 },
    { id: 9, height: 5, width: 4 },
    { id: 10, height: 5, width: 4 },
    { id: 11, height: 5, width: 4 },
    { id: 12, height: 4, width: 3 },
    { id: 13, height: 4, width: 5 },
    { id: 14, height: 3, width: 2 },
    { id: 15, height: 3, width: 3 },
    { id: 16, height: 2, width: 1 },
    { id: 17, height: 2, width: 1 },
    { id: 18, height: 1, width: 2 },
    { id: 19, height: 1, width: 2 }
];

let choice: Duck[] = [];

const countWidth = (ducks: Duck[]): number => ducks.map(duck => duck.width).reduce((a, b) => a + b, 0);
const countHeight = (ducks: Duck[]): number => ducks.map(duck => duck.height).reduce((a, b) => a + b, 0);
const power_set = <T>(array: T[]): T[][] => [...Array(1 << array.length).keys()].map(i => array.filter((_, y) => (1 << y) & i));

let result = power_set(real_ducks)
    .filter(array => countWidth(array) <= max_width)
    .sort((a, b) => countHeight(b) - countHeight(a))[0];

console.log(result);
console.log(countHeight(result));
console.log(countWidth(result));