exports.min = function min(array) {
    if (array === undefined || array.length === 0) return 0;
    let min = array[0];
    for (let i = 0; i < array.length; i += 1){
        array[i] < min ? min = array[i] : min = min;
    }
    return min;
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) return 0;
    let max = array[0];
    for (let i = 0; i < array.length; i += 1){
        array[i] > max ? max = array[i] : max = max;
    }
    return max;
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) return 0;
    let avg = 0;
    for (let i = 0; i < array.length; i += 1){
        avg += array[i];
    }
    return avg / array.length;
}
