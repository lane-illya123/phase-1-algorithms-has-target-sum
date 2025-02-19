//Runtime O(n)
function hasTargetSum(array, target) {
// create an object that stores seen numbers
  const seenNumbers = {}

// Iterates thur each number in the array
  for(let i = 0; i < array.length; i++){

    const compliment = target - array[i];

    if(seenNumbers[compliment]) return true;

    seenNumbers[array[i]] = true
  }

  return false

  }

/* 
  Write the Big O time complexity of your function here
  O(n)
  */

/* 
  Add your pseudocode here
([3, 8, 12, 4, 11, 7], 10)
  ^  ^                  ^
  N  N2               Target

after N2 full cycle 

([3, 8, 12, 4, 11, 7], 10)
     ^   ^              ^
     N  N2            Target


  */

/*
  Add written explanation of your solution here
sort thur an array while testing the items inside to match the target number
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
