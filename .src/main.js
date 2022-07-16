var listening = '';
var currentHand = new Hand();
var lastHands = [];

function main() {
    doAction();
}

/**
 * Asks the user to select a card.
 * @param {string} reason why the input is needed
 */
function askForInput(reason) {
    var req = document.getElementById('inputReq');
    req.innerHTML = inputDisplay(reason);
    listening = reason;

    var cancelButton = document.createElement('button');
    var cancelDiv = document.getElementById('cancel');
    cancelButton.id = 'cancel';
    cancelButton.innerHTML = 'Cancel selection';
    cancelButton.className = 'input';
    cancelButton.onclick = function () {
        req.innerHTML = '';
        listening = '';
        clearChildren(cancelDiv);
    }
    clearChildren(cancelDiv);
    cancelDiv.appendChild(cancelButton);
}

/**
 * Updates the HTML display of the user's hand
 */
function updateHandDisplay() {
    var hand = document.getElementById('hand');
    clearChildren(hand);
    for (const card in currentHand.cards) {
        for (var i = 0; i < currentHand.cards[card]; i++) {
            var newButton = document.createElement('button');
            newButton.id = card;
            newButton.innerHTML = capitalFirstLetter(card);
            newButton.onclick = () => cardClick(card);
            newButton.className = 'card';
            hand.appendChild(newButton);
        }
    }

    var downStrs = [];
    for (const card in currentHand.down) {
        downStrs.push(`${currentHand.down[card]}x ${card}`);
    }
    var downP = document.getElementById('down');
    if (downStrs.length > 0) downP.innerHTML = downStrs.join(', ');
    else downP.innerHTML = 'None';
}

/**
 * Called whenever a card is clicked, even if the program is not listening.
 * @param {string} card the name of the clicked card
 */
function cardClick(card) {
    if (listening in BUTTON_MAPPING) {
        var req = document.getElementById('inputReq');
        req.innerHTML = '';
        pushHand();
        const button_funcs = {
            'loseCard' : () => currentHand.loseCard(card),
            'addCard'  : () => currentHand.addCard(card),
            'goFish'   : function () {
                if (currentHand.drawCard() === card) {
                    req.innerHTML = 'You drew the card you asked for so you get to go again!';
                }
            }
        };
        button_funcs[listening]();
        doAction();
        listening = '';
    }
}

/**
 * Undoes the user's last action by setting currentHand to the most recent hand
 */
function undoAction() {
    if (lastHands.length > 0) {
        currentHand = lastHands.pop();
        doAction();
    } else {
        document.getElementById('inputReq').innerHTML = 'Nothing to undo!';
    }
}

/**
 * Should be called everytime the state of the hands changes
 */
function doAction() {
    updateHandDisplay();
    clearChildren(document.getElementById('cancel'));
}
