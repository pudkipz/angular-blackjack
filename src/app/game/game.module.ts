import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameViewComponent } from './game-view/game-view.component';
import { GameOverComponent } from './game-over/game-over.component';



@NgModule({
  declarations: [
    GameViewComponent,
    GameOverComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
