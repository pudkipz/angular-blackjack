import { Component, inject } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-game-view',
  standalone: false,
  templateUrl: './game-view.component.html',
  styleUrl: './game-view.component.css'
})
export class GameViewComponent {
  gameService = inject(GameService);

  newGame() {
    this.gameService.newGame();
  }

  getGameState() {
    if (this.gameService.activeGame) return 'game';
    else if (this.getTotal() > 21) return 'lose';
    else if (this.getTotal() <= 21) return 'win';

    // we won't ever reach this, but I like the idea of being explicit
    else return null;
  }

  getTotal() {
    return this.gameService.getHandTotal();
  }

  drawCard() {
    this.gameService.drawCard();
  }

  getDeck() {
    return this.gameService.deck;
  }

  getHand() {
    return this.gameService.hand;
  }
}
