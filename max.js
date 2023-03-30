function findMaxValue(numbers) {
    var maxValue = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxValue) {
            maxValue = numbers[i];
        }
    }
    return maxValue;
}
var numbers = [3, 8, 1, 6, 2, 9, 4, 7, 5];
var max = findMaxValue(numbers);
console.log(max);
