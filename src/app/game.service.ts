import { Injectable } from '@angular/core';
import { Card } from './game/model/card';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  deck: Card[] = [];
  hand: Card[] = [];
  activeGame: boolean = true;

  constructor() {
    this.newGame();
  }

  newGame() {
    this.deck = this.freshDeck();
    this.hand = [];
    this.activeGame = true;
  }

  stand() {
    this.activeGame = false;
  }

  getHandTotal(): number {
    let total = 0;
    let nAces = 0;
    for (let card of this.hand) {
      total += card.value;
      if (card.value == 1) nAces++;
    }
    // allow aces to be 1 or 11 (1 + 10)
    for (let i = 0; i < nAces; i++) {
      if (total + 10 < 21) total += 10;
    }
    return total;
  }

  drawCard(): void {
    let cardIdx = Math.floor(Math.random() * (this.deck.length));
    let card = this.deck.splice(cardIdx, 1)[0];
    this.hand.push(card);

    if (this.getHandTotal() >= 21) {
      this.activeGame = false;
    }
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
          imgPath: this.getImagePath(value, suit),
        });
      }
    }
    return deck;
  }

  getImagePath(_: number, suit: string): string {
    switch (suit) {
      case 'spades':
        return '/assets/spades.svg';
      case 'hearts':
        return '/assets/hearts.svg';
      case 'clubs':
        return '/assets/clubs.svg';
      case 'diamonds':
        return '/assets/diamonds.svg';
      default:
        return '';
    }
  }

  printCard(value: number, suit: string): string {
    // TODO: consider making 'name': string instead of function
    switch (value) {
      case 1:
        return `A`;
      case 11:
        return `J`;
      case 12:
        return `Q`;
      case 13:
        return `K`;
      default:
        return `${value}`;
    }
  }

  printCardVerbose(value: number, suit: string): string {
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
