const NUM = 10;

/**
 * this is for loop to generate 9 single digit random number
 */
for (let i = 0; i < NUM; i++) {
    let randomFunc = Math.floor(Math.random() * 10);
    console.log("Value of Random Function is : " + randomFunc);
}
