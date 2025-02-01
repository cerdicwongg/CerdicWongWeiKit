// Given the following array, you are to calculate the average closing price. Structure of the array is as follows:

const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
let totalPrice = 0;
let count = 0;

for (let price of msftData) {
	totalPrice += price[3];
	count++;
}

let avg = totalPrice / count;
console.log("Average closing price of MSFT is " + avg.toFixed(2));