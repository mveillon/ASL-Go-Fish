/**
 * Returns a random integer in between min (inclusive) and max (exclusive)
 * @param {int} min the lower bound
 * @param {int} max the upper bound. If not provided, the number will be between 0 and min
 * @returns {int} a random integer in the provided range
 */
 function randInt(min, max) {
    if (typeof max === 'undefined') {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min) + min - 0.0001); // 0.0001 is just in case Math.random returns 1.0
}

/**
 * Returns a randomly selected element of the array
 * O(1)
 * @param {Array} arr the array to select an element from
 * @returns {*} one choice from the array
 */
function choice(arr) {
    return arr[randInt(arr.length)];
}

/**
 * Shuffles the array in place, using Fisher-Yates
 * O(arr.length)
 * @param {Array} arr the array to shuffle
 */
function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = randInt(i + 1);
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
}

/**
 * Returns n randomly selected elements from arr
 * O(arr.length)
 * @param {Array} arr the array to select the elements from
 * @param {int} n how many elements to select
 * @returns {Array} n random elements from arr
 */
function choices(arr, n) {
    var arrCopy = [...arr];
    shuffle(arrCopy);
    var res = [];
    for (var i = 0; i < n; i++) {
        res.push(arrCopy[i]);
    }
    return res;
}