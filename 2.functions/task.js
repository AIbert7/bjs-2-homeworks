function getArrayParams(...arr) {
    let min, max, sum, avg;
    min = Infinity;
    max = -Infinity;
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i])
        max = Math.max(max, arr[i])
        sum += arr[i];
        console.log(` - ${arr[i]};`);
    }
    avg = +(sum / arr.length).toFixed(2);
    return { min: min, max: max, avg: avg };
}
getArrayParams(-Infinity, Infinity);


function summElementsWorker(...arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
summElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)


function differenceMaxMinWorker(...arr) {
    let min, max, dif;
    min = Infinity;
    max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i]
        if (arr[i] > max) max = arr[i]
        dif = Math.abs(min - max);
    }
    if (arr.length > 0) {
        return dif
    } else {
        return 0
    }
}
differenceMaxMinWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)


function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
        } else {
            sumOddElement += arr[i];
        }
    }

    return sumEvenElement - sumOddElement;
}
differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)


function averageEvenElementsWorker(...arr) {
    let sumEvenElement, countEvenElement;
    sumEvenElement = 0;
    countEvenElement = 0;
    if (!arr || arr.length === 0) {
        return 0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
            countEvenElement++;
        }



    }
    return +(sumEvenElement / countEvenElement).toFixed(2);
}

averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
        const result = func(...arrOfArr[i]);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }
    return maxWorkerResult;
}
