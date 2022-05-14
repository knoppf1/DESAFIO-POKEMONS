import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from 'src/pokemon/pokemon-list/pokemon-list.component';
import { PokemonViewComponent } from 'src/pokemon/pokemon-view/pokemon-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
},
{
  path: 'list',
  children: [
    {
      path: '',
      component: PokemonListComponent
    },
  ],
},
{
  path: 'view',
  children: [
    {
      path: '',
      component: PokemonViewComponent
    },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
