var original = process.argv[2];

if (original)
  console.log(reverse(original));

function reverse(original) {
  return original.split('').reverse().join('');
}
