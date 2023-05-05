const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const nums = [0, 1, 2, 3, 4, 5];

// forEach
days.forEach((day) => console.log(day));

// map 

const cubeNums = nums.map((num) => num * num * num);
console.log(cubeNums)

const daysAreGood = days.map((day) => `${day} is a great day!`);

// filter

const numsGreaterThan2 = nums.filter((num) => num > 2)

console.log(numsGreaterThan2);