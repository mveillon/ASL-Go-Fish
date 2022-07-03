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
    var toDisp = '';
    switch (reason) {
        case 'loseCard':
            toDisp = 'Please click which card they got from you';
            break;
        case 'addCard':
            toDisp = 'Please click which card you got from them';
            break;
        case 'goFish':
            toDisp = "Please click which card you guessed that they didn't have";
            break;
        default:
            console.log(reason);
            break;
    }
    req.innerHTML = toDisp + ' or click "Cancel selection"';
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
            newButton.innerHTML = card;
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
    if (listening !== '') {
        var req = document.getElementById('inputReq');
        req.innerHTML = '';
        switch (listening) {
            case 'loseCard':
                pushHand();
                currentHand.loseCard(card);
                break;
            case 'addCard':
                pushHand();
                currentHand.addCard(card);
                break;
            case 'goFish':
                pushHand();
                if (currentHand.drawCard() === card) {
                    req.innerHTML = 'You already had this card so you get to go again!';
                }
                break;
            default:
                console.log(listening);
                break;
        }
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

/**
 * Pushes a deep copy of currentHand to lastHand
 */
function pushHand() {
    lastHands.push(currentHand.copy());
}
