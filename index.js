function writeCards(names, event) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        cards.push(message);
    }
    return cards;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num); 
        num--;
    }
}