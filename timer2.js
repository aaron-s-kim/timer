const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// const numUC = ['\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037', '\u0038', '\u0039']; //this also works
const numUC = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let delay = 0;

// upon input from stdin...
process.stdin.on('data', (key) => {
  if (key === '\u0062') {
    process.stdout.write('\x07'); // perform system sound
  }

  if (numUC.includes(key)) {
    delay = key * 1000;
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07'); // perform system sound
      process.stdout.write('beep\n'); // perform system sound
    }, delay);
  }
  

  // \u0003 maps to Ctrl+C input // Allows us to quit terminal
  if (key === '\u0003') {
    process.exit();
  }
});


// press b to beep right away
// can input any # 1-9 and should:
//    immediately output 'setting timer for x seconds...', and
//    beep after that number of seconds has passed
// user can use ctrl+c to exit program, then program should say "Thanks for using me, ciao!" before terminating

