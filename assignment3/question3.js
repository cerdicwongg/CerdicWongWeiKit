const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below
const opendisneyData = parseFloat(disneyData['open']);
const highdisneyData = parseFloat(disneyData['high']);
const lowdisneyData = parseFloat(disneyData['low']);
const closedisneyData = parseFloat(disneyData['close']);
const caldisneyData = opendisneyData - highdisneyData + lowdisneyData - closedisneyData;
const fixeddisneyData = caldisneyData.toFixed(2);

console.log(fixeddisneyData);