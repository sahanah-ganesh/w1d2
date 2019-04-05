var input = process.argv.slice(2);

var rollTimes = input.join();

var result = function(rollTimes) {
  var resultStr = "";

  for (var i = 0; i < rollTimes; i++) {
    if (i === rollTimes - 1) {
      resultStr += (Math.floor(Math.random() * 6) + 1);
    } else {
      resultStr += (Math.floor(Math.random() * 6) + 1) + ", ";
    }
  }
  return resultStr;
};

console.log("Rolled", rollTimes, "dice:", result(rollTimes));
