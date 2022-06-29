// .reduce() - служит для того, чтобы мы получили какое-то финальное значение, совершив итерацию по массиву. Колбэк принимает в себя два параметра accumulator (currentValue, previousValue, total) и итерируемый элемент (nextValue).

/*let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((total, el) => total + el);

console.log(sum);*/

//1. Найти среднеарифметическое число

let arr = [33, 54, 12, 1, 4];

let sum = arr.reduce((total, el) => total + el)/arr.length;

console.log(sum);

