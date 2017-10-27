export enum CardNumber {
  Ace, Two, Three, Four, Five,
  Six, Seven, Eight, Nine, Ten,
  Jack, Queen, King
}

export enum Suit {
  Clubs,
  Diamons,
  Hearts,
  Spades
}

type Card = [Suit, CardNumber];

/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

function generateDeck(): Card[] {
  let cards: Card[] = [];

  for (let s = 0; s < Object.keys(Suit).length / 2; s++) {
    for (let c = 0; c < Object.keys(CardNumber).length / 2; c++) {
      cards.push([s, c]);
    }
  }

  return cards;
}

export class Dealer {
  cards: Card[]

  constructor() {
    this.cards = generateDeck();
    shuffleArray(this.cards);
  }

  dealHand(handSize: number): Card[] {
    if (handSize < 0) throw new Error('Give me cards?');
    if (handSize > this.cards.length) throw new Error('No more cards in the deck.');

    return this.cards.splice(0, handSize);
  }

  getLength(): number {
    return this.cards.length;
  }

  readCard(card: Card): string {
    let [cardSuit, cardNumber ] = card;

    return `${CardNumber[cardNumber]} of ${Suit[cardSuit]}`;
  }
}