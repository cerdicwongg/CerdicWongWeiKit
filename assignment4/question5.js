// Given the following object, you are to calculate the average closing price (rounded to 2 decimal places):
const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
let totalPrice = 0;
let count = 0;

for (let price of disneyData) {
	totalPrice += parseFloat(price.close);
	count++;
}

let avg = totalPrice / count;

// Multiply by 100, round, then divide by 100 to ensure correct rounding
let correctedAvg = Math.round(avg * 100) / 100;

console.log("Average closing price of Disney is " + correctedAvg.toFixed(2));