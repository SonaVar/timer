const alarm = process.argv;
for (let i = 2; i < alarm.length; i ++) {
  if (alarm[i] >= 0 && alarm[i] !== NaN){
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (1000 * alarm[i]));
  }
}