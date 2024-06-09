function arraySum(array, targetSum) {
  let startIndex = 0;
  let currentSum = 0;

  for (let endIndex = 0; endIndex < array.length; endIndex++) {
    currentSum += array[endIndex];

    while (currentSum > targetSum) {
      currentSum -= array[startIndex];
      startIndex++;
    }

    if (currentSum === targetSum) {
      return true;
    }
  }

  return false;
}
