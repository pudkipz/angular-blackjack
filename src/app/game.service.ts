import { Injectable } from '@angular/core';
import { Card } from './game/model/card';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  deck: Card[];
  hand: Card[] = [];

  constructor() {
    this.deck = this.freshDeck();
  }

  drawCard(): void {
    let cardIdx = Math.floor(Math.random() * (this.deck.length));
    let card = this.deck.splice(cardIdx, 1)[0];
    this.hand.push(card);
    console.log(this.deck)
  }

  freshDeck(): Card[] {
    let deck = [];
    let suits = ['spades', 'hearts', 'clubs', 'diamonds'];
    for (let suit of suits) {
      for (let value = 1; value <= 13; value++) {
        deck.push({
          suit: suit,
          value: value,
          name: () => this.printCard(value, suit),
        });
      }
    }
    return deck;
  }

  printCard(value: number, suit: string): string {
    // TODO: consider making 'name': string instead of function
    switch (value) {
      case 1:
        return `Ace of ${suit}`;
      case 11:
        return `Jack of ${suit}`;
      case 12:
        return `Queen of ${suit}`;
      case 13:
        return `King of ${suit}`;
      default:
        return `${value} of ${suit}`;
    }

  }
}
