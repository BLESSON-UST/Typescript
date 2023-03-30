function findMaxValue(numbers: number[]): number {
    let maxValue = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxValue) {
        maxValue = numbers[i];
      }
    }
  
    return maxValue;
  }
  const numbers = [3, 8, 1, 6, 2, 9, 4, 7, 5];
  const max = findMaxValue(numbers);
  console.log(max); 