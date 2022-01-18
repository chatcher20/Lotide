# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @chatcher20/lotide`

**Require it:**

`const _ = require('@chatcher20/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(a, b)`: compares two flat arrays
* `assertEqual(a, b)`: compares two primitive values
* `assertObjectsEqual(a, b))`: compares two flat objects
* `countLetters(a)`: returns an object with each unique letter as keys and how many instances each value occurs.
* `countOnly(a, b))`: looks at an array (a) and returns an object with each unique item as keys, ad nd occurencs of each value. B filters the objects
* `eqArrays(a, b))`: compares two arrays, and returns true if a and b are identical
* `eqObjects(a, b))`: compares two objects, and returns true if a and b are identical
* `findKey(a, fn)`: searches object (a) for the first key which satisifies a given callback function (fn) and returns that key.
* `findKeyByValue(a, b))`: searches the values (b) of object (a) and returns its key
* `flatten(a)`: returns an array that is flattened by one level
* `head(a)`: this will return the first item ("head") in an array
* `letterPositions(a)`: returns an object containing all unique elements (letters) of a string as keys, and outputs the position of those elements as the values for the key:value pairs
* `map(a, fn)`: returns a new array with the elements of an input array (a) which have been manpualed by callback function (fn)
* `middle(a)`: returns the middle value (or two middle values) of a given array. Arrays with an even number of elements will return two middle values.
* `tail(a)`: this will return everything BUT the first item in an array (opposite of head)
* `takeUntil(a, fn)`: dreturns items from the start of an array until the callback function condition is met.
* `without(a, b))`: returns an array that has all of the elements from array a but with the elments from array b removed.