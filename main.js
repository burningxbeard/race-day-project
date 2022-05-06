let raceNumber = Math.floor(Math.random() * 1000);
const regEarly = false;
let runnerAge = 20;
if (regEarly === true && runnerAge > 18) {
    raceNumber += 1000;
}
if (regEarly === true && runnerAge > 18) {
    console.log(`Your number is ${raceNumber} and your race starts at 9:30am. Best of luck!`);
  } else if (regEarly === false && runnerAge > 18) {
    console.log(`Your number is ${raceNumber} and your race starts at 11:00am. Be sure to stretch!`);
  } else if (runnerAge < 18) {
    console.log(`Your number is ${raceNumber} and your race starts at 12:30pm. Have fun and good luck!`);
  } 
