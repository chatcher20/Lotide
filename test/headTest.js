const assertEqual = require('../assertEqual'); //two dots for going up one folder
const head = require('../head'); //two dots for going up one folder


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 20);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Goodbye");
assertEqual(head([]), 5); //array with no elements should return undefined
assertEqual(head([5]), 5); //array with just one element should return that element


