const arg = process.argv.slice(2);
let validArgs = [];
if (arg) { //Extract only valid numbers to a new array
  arg.forEach((element) => {
    if (element && !isNaN(element) && element > 0) {
      validArgs.push(element);
    }
  });
  validArgs.forEach((x) => {
    setTimeout(() => {
      console.log(x);
      process.stdout.write("\x07");
    }, x * 1000);
  });
}
