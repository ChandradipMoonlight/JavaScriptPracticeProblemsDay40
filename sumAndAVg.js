const NUM = 6;
let number = 0
for (let i = 0; i < NUM; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    number = number + randomNum;
}
console.log("Additon of five digit number is = " + number + "\nAnd Avarage is = " + number/5);