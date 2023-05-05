let nums = [1, 2, 3, 4, 5];

let newNums;

function test(something) {
    newNums = [...nums];
    newNums.splice(1, 0, something);
    return newNums;
}

console.log(test(20));
