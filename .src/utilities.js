const HAND_SIZE = 5;
const SET_SIZE = 4;
const POOL_SIZE = 8;
// probability of them having the card you ask for equals:
// 1 - ((POOL_SIZE - 1) / POOL_SIZE) ** HAND_SIZE

const BUTTON_MAPPING = {
    'loseCard' : 'Please click which card they got from you',
    'addCard'  : 'Please click which card you got from them',
    'goFish'   : "Please click which card you guessed that they didn't have"
};

const wordPool = choices(allWords, POOL_SIZE);

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

/**
 * Given a reason to start listening, return what to tell the user to click
 * @param {string} reason which button the user clicked, supplied by the HTML
 * @returns {string} the user-readable reason
 */
function inputDisplay(reason) {
    if (!reason in BUTTON_MAPPING) console.log(reason);
    else return BUTTON_MAPPING[reason] + ' or click "Cancel Selection"';
}