const HAND_SIZE = 5;
const SET_SIZE = 4;

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
 * Clears the children of the HTML element
 * @param {HTMLElement} parent the HTML element to clear
 */
function clearChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/**
 * Given an object of the form {element : number}, increments the number associated with prop safely
 * @param {object} obj the object to change
 * @param {string} prop the property to access and change
 * @param {int} amount the amount to change the object by. If not provided, will be set to one
 */
function incrementObject(obj, prop, amount) {
    if (typeof amount === 'undefined') amount = 1;
    if (prop in obj) {
        obj[prop] += amount;
    } else {
        obj[prop] = amount;
    }
}