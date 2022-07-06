/**
 * Everything needed to know about the user's hand
 */
class Hand {
    constructor() {
        this.cards = {};
        this.down = {};
        for (var i = 0; i < HAND_SIZE; i++) {
            this.drawCard();
        }
    }

    /**
     * Draws a random card and adds it to the user's hand
     * @returns {string} the drawn card
     */
    drawCard() {
        const res = choice(wordPool);
        this.addCard(res);
        return res;
    }

    /**
     * Adds the given card to the user's hand
     * @param {string} cardName the name of the card to add
     */
    addCard(cardName) {
        incrementObject(this.cards, cardName);
        if (this.cards[cardName] >= SET_SIZE) {
            incrementObject(this.down, cardName, SET_SIZE);
            this.cards[cardName] -= SET_SIZE;
        }
    }

    /**
     * Removes a card from the user's hand
     * @param {string} cardName the name of the card to remove
     */
    loseCard(cardName) {
        this.cards[cardName] -= 1;
    }

    /**
     * Copies this hand to a new one
     * @returns {Hand} a new hand with the same fields
     */
    copy() {
        var res = new Hand();
        res.cards = {...this.cards};
        res.down = {...this.down};
        return res;
    }
}

/**
 * Pushes a deep copy of currentHand to lastHand
 */
 function pushHand() {
    lastHands.push(currentHand.copy());
}

