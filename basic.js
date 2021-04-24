function allNum() {
    let num = "";
    for (let i = 1; i < 20; i++) {
        num = num + i;
    }
    return num.concat("", i);
}
console.log(allNum());

function oddNum() {
    let num = "";
    for (let i = 0; i < 20; i++) {
        if (i % 2 !=== 0) {
            num = num + i;
        }
    }
    return num;
}
console.log(oddNum());

function sum(...numbers) {
    let digit = 0;
    for (const num of numbers) {
        digit = digit + Number(num);
    }
    return digit;
}
console.log(sum(4, 6, 20, 10));

let numbers = [2, 1, 4, 2, 1, 1, 4];
function myList(arr, value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++
    }
    return count;
}
console.log(myList(numbers, 1));

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        let result = "";
        if (i % 3 === 0 && i % 5 === 0) {
            result = result + 'Fizzbuzz';
        }
        else if (i % 3 === 0) {
            result = result + 'Fizz';
        }
        else if (i % 5 === 0) {
            result = result + 'Buzz'
        }
        console.log(result || i)
    }
}
fizzBuzz(16);