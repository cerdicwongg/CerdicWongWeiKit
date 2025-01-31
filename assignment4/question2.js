const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

function avgPrice() {
    let totalPrice = 0;

    for (let price of amdPrices) { 
        totalPrice += amdPrices[price];
    }

    // divide by length
    let avg = 0;
    avg = totalPrice / amdPrices.length;

    console.log(avg);
}

avgPrice()

