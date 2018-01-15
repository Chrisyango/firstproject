function jediName(firstName, lastName) {
    let first = firstName.slice(0, 2);
    let last = lastName.slice(0, 3);
    console.log(`${last}${first}`);
}
jediName("Chris", "Yang");

function beyond(num) {
    if (isFinite(num) === false) {
        console.log("And beyond");
    } else if (num > 0) {
        console.log("to infinity");
    } else if (num < 0) {
        console.log("to negative infinity");
    } else if (num === 0) {
        console.log("Staying home.");
    }
}
beyond(0);

function decode(message) {
    let result = [];
    let words = message.split(" ");
    for (i = 0; i < words.length; i++) {
        if (words[i][0] === "a") {
            result.push(words[i][1])
        } else if (words[i][0] === "b") {
            result.push(words[i][2])
        } else if (words[i][0] === "c") {
            result.push(words[i][3])
        } else if (words[i][0] === "d") {
            result.push(words[i][4])
        } else {
            result.push(" ")
        };
    }
    console.log(result.join(""));
}
decode("craft block argon meter bells brown croon droop");

function daysInMonth(month) {
    switch(month) {
        case "January":
        console.log("January has 31 days.")
        break;
        case "February":
        console.log("February has 28 days.")
        break;
        case "March":
        console.log("March has 31 days.")
        break;
        case "April":
        console.log("April has 30 days.")
        break;
        case "May":
        console.log("May has 31 days.")
        break;
    }
}
daysInMonth("February");

function rockPaperScissors (choice) {
    const computerChoice = Math.floor(Math.random() * 3);
    switch(choice) {
        case "rock": 
            if (computerChoice === 3) {
                (console.log("You win")); 
             } else if (computerChoice === 2) {
                (console.log("Sorry, you lost"));
            } else {
                (console.log("You tied!"));
            }
            break;

            case "scissors": 
            if (computerChoice === 2) {
                (console.log("You win")); 
             } else if (computerChoice === 1) {
                (console.log("Sorry, you lost"));
             } else {
                (console.log("You tied!"));
            }
            break;

            case "paper": 
            if (computerChoice === 1) {
                (console.log("You win")); 
             } else if (computerChoice === 3) {
                (console.log("Sorry, you lost"));
            } else {
                (console.log("You tied!"));
            }
    }
}

rockPaperScissors("paper");

/* 
 1 beats 3
 3 beats 2
 2 beats 1
 */