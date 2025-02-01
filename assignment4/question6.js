// Your colleague has prepared the following code to find the 3 lowest average prices for AMD stocks:

// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

// sort ascending
let sortPrices = amdPrices.sort((a, b) => a - b);

let lowestThree = sortPrices.slice(0, 3);

let formattedOutput = `${lowestThree[0]}, ${lowestThree[1]}, and ${lowestThree[2]}`;

console.log("The three lowest prices are " + formattedOutput);
