import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsExampleComponent } from 'app/cards-example/cards-example.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'cards',
    component: CardsExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
