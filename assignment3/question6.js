const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below
const low = disneyData['low'];
const high = disneyData['high'];
const open = disneyData['open'];
const close = disneyData['close'];
const volume = disneyData['volume'];

if (close > open) {
    if (volume > 100000) {
        console.log("Strong Bullish");
    }
    else {
        console.log("Bullish");
    }
    
}
else if (close < open) {
    if (volume > 100000) {
        console.log("Strong Bearish");
    }
    else {
        console.log("Bearish");
    }
}
else if (close === open) {
    console.log("neutral");
}