const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = 3000

server.listen(port)
app.use(express.static(__dirname + '/public'))

function buildDeck() {
    const suits = ['clubs', 'diamonds', 'hearts', 'spades']
    const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']

    let deck = []
    for (let i = 0; i < suits.length; i++){
        for (let j = 0; j < ranks.length; j++) {
            deck.push([suits[i], ranks[j]])
        }
    }
    return deck
}

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

let deck = buildDeck()
shuffle(deck)

console.log(deck)
console.log(deck.length)
