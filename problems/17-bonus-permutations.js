/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

function permutations(array) {
  // Base case: If the array has only one element, return an array containing that element
  if (array.length === 1) {
    return [array];
  }

  let result = [];

  for (let i = 0; i < array.length; i++) {
    // Create a new array without the current element
    let withoutCurrent = array.slice(0, i).concat(array.slice(i + 1));

    // Recursively get all the permutations of the new array
    let permutationsWithoutCurrent = permutations(withoutCurrent);

    // Add the current element to the beginning of each permutation
    let permutationsWithCurrent = permutationsWithoutCurrent.map((permutation) =>
      [array[i]].concat(permutation)
    );

    // Add the permutations with the current element to the result
    result = result.concat(permutationsWithCurrent);
  }

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
