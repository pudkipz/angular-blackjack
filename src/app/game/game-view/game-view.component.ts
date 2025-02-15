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

  getDeck() {
    return this.gameService.deck
  }
}
