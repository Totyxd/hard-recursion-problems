/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

function isSorted(array){
    if (array.length <= 1) {
      // If the array has 0 or 1 elements, it is sorted by default
      return true;
    }

    // Check if the first two elements are in the correct order
    if (array[0] > array[1]) {
      // If not, the array is not sorted in ascending order
      return false;
    }

    // Recursively check if the rest of the array is sorted
    return isSorted(array.slice(1));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
