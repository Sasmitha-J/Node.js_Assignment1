
//REPL program to find Odd or Even Number

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkOddOrEven() {
    rl.question("Enter a number (or type 'q' to quit): ", function(input) {
        if (input.toLowerCase() === 'q') {
            console.log("Exiting...");
            rl.close();
        } else {
            const number = parseInt(input);
            if (isNaN(number)) {
                console.log("Invalid input! Please enter a valid number.");
            } else if (number % 2 === 0) {
                console.log(`${number} is Even`);
            } else {
                console.log(`${number} is Odd`);
            }
            checkOddOrEven(); // Recursive call for the next input
        }
    });
}

checkOddOrEven();

//OUTPUT:

/*
Enter a number (or type 'q' to quit): 5
5 is Odd

Enter a number (or type 'q' to quit): 8
8 is Even

Enter a number (or type 'q' to quit): q
Exiting...

*/