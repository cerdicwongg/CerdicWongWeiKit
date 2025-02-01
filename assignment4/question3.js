// Given the following array, find the average price over a period of 7 days and 
// count the number of days in which the price was above the 7 day simple moving average
const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
function avgPrice() {
    let totalPrice = 0;

    for (let price of amdPrices) { 
        totalPrice += price;
    }

    // divide by length
    let avg = 0;
    avg = totalPrice / amdPrices.length;
    avg = avg.toFixed(2);
    return avg;
}

function countPrice () {
    let avg = avgPrice();
    let count = 0;

    for (let price of amdPrices) {
        if (price > avg) {
            count++
        }
    }
    console.log("Number of days AMD was above the 7-day SMA is: " + count);
}

countPrice();


