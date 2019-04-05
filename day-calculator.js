function calculateDayInYear(date) {

// take date and split into array by /
  var splitDate = date.split('/');
// console.log("split", splitDate);

// index of splitDate array at 0 is year
  var year = Number(splitDate[0]);

// index of splitDate array at 1 is month
  var month = Number(splitDate[1]);

// index of splitDate array at 2 is day
  var day = Number(splitDate[2]);

// for feb function to check leap years. ERROR ALWAYS RETURNS 28!
  var febDays = daysInFeb(year);
// console.log("febDays", febDays);

// in order from jan to dec with febDays calculated by function
  var DAYS_IN_MONTH = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
    return calculateDayNumber(month, day);
  } else {
    console.log("Invalid date");
  }

  function validMonth(month) {
    return month >= 1 && month <= 12;
  }

  function validDay(month, day) {
    return day <= DAYS_IN_MONTH[month - 1];
  }

  function calculateDayNumber(month, day) {
    var dayOfYear = 1;

    for (var i = 1; i < month; i++) {
      dayOfYear += DAYS_IN_MONTH[i - 1];
    }
    dayOfYear += day - 1;

    return dayOfYear;
  }

  function daysInFeb(year) {
    return isLeapYear(year) ? 29 : 28;
  }

  function isLeapYear(year) {
    return isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4);
  }
}

function isMultiple(numerator, denominator) {
  return numerator % denominator === 0;
}

var date = process.argv[2];

if (!date) {
  console.log("Please provide a date in the format YYYY/MM/DD");
} else {
  calculateDayInYear(date);
}

/*
    Below are some simple tests!

    They run the function with a predetermined parameter and compare the output to the value we are expecting to get!

    The console.log will output either 'true' or 'false' based on whether or not the function
    returns a value that matched our expected value.

    You'll know your code works correctly when all of these tests return 'true'
*/
console.log("Tests:");
console.log("---------------");
console.log(calculateDayInYear("1900/3/2") === 61);
console.log(calculateDayInYear("2000/3/2") === 62);
console.log(calculateDayInYear("2012/2/29") === 60);
console.log(calculateDayInYear("2015/12/31") === 365);