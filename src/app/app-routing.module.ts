import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameViewComponent } from './game/game-view/game-view.component';
import { GameOverComponent } from './game/game-over/game-over.component';

const routes: Routes = [
  {
    path: 'game/play',
    component: GameViewComponent,
  },
  {
    path: 'game/gameover',
    component: GameOverComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
