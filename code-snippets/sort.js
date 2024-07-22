'use strict';

function sort(arr) {
    for (let leftPointer = 0; leftPointer < arr.length; leftPointer++) {
        for (let rightPointer = 1; rightPointer < arr.length; rightPointer++) {
            if (arr[leftPointer] < arr[rightPointer]) {
                let temp = arr[leftPointer]
                arr[leftPointer] = arr[rightPointer];
                arr[rightPointer] = temp;
            }
        }
    }
    arr.push(arr.shift());
    return arr;
}

let test = [5, 3, 1, 9, 7];
let test2 = ['c', 'd', 'e', 'a', 'g'];

console.log(sort(test)); // [1,3,5,7,9]
console.log(sort(test2)); // ["a","c","d","e","g"]