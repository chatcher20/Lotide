const assertEqual = require('../assertEqual'); //two dots for going up one folder
const tail = require('../tail'); 

// Test assertions:

const oldArray = [5, 7, 9];
const newArray = tail(oldArray);
assertEqual(newArray[0], 7);
assertEqual(newArray[0], 9);

const oldArray2 = ["Rebels", "Blazers", "Rockets", "Hitmen"];
const newArray2 = tail(oldArray2);
assertEqual(newArray2[0], "Blazers");
assertEqual(newArray2[0], "Rockets");

const oldArray3 = [1];
const newArray3 = tail(oldArray3);
assertEqual(newArray3[0], "Chris rocks");
assertEqual(newArray3[0], []);

const oldArray4 = [];
const newArray4 = tail(oldArray4);
assertEqual(newArray4[0], "Chris rocks");
assertEqual(newArray4[0], []);


