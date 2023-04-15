const arg = process.argv.slice(2); // Retrieve user's command line arguments to an array
let validArgs = [];
if (arg) { //Extract only valid numbers to a new array ie validArgs
  arg.forEach((element) => {
    if (element && !isNaN(element) && element > 0) { //checking if input has a value and is a number and is a positive number
      validArgs.push(element); // add only valid numbers
    }
  });
  validArgs.forEach((x) => { // for each input, set time out to beep when the delay matches the input*1000 ms
    setTimeout(() => {
      console.log(x); // printing the input to console so that user can track at which second, the timer is beeping
      process.stdout.write("\x07"); // command to beep
    }, x * 1000);
  });
}
