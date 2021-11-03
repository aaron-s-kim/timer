// Implement alarm clock/timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments
// ex. > node timer1.js 10 3 5 15 9 will beep at 3, 5, 9, 10, 15 seconds

const args = process.argv.slice(2);
let delay = 0;

for (let i = 0; i < args.length; i++) {
  if ((Number(args[i])) && (Number(args[i]) > 0)) {
    delay = Number(args[i]) * 1000;
  
    setTimeout(() => {
      process.stdout.write('\x07'); // perform system sound
      process.stdout.write(args[i] + '\n');
    }, delay);
  }
}

// // Edge Cases
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.