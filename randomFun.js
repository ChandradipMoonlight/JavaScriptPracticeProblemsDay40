const NUM = 10;

/**
 * this is for loop to generate 9 single digit random number
 */
for (let i = 0; i < NUM; i++) {
    let randomFunc = Math.floor(Math.random() * 10);
    console.log("Value of Random Function is : " + randomFunc);
}

/**
 * this for loop is for to generate Dice number between 1 to 6
 */
for (let i = 0; i < NUM; i++) {
    let Dice = Math.floor(Math.random() * 10) % 7;
    console.log("Die value is : " + Dice);
}

for (let i = 0; i < NUM; i++) {
    let randomNum = Math.floor(Math.random() * 100);
}

