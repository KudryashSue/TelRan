// Дан массив с числами [34, 4, 1, 0, 9, 5]. Найдите сумму элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

let arr = [34, 4, 1, 0, 9, 5];

let sum = arr.reduce((total, el) => {
    if(el !== 0){
        return total + el;
    }else{ 
        return total;
    }
})

console.log(sum);
