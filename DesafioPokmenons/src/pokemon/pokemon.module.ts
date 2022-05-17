import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProcuradoComponent } from './procurado/procurado.component';


@NgModule({
  declarations: [
    CadastroComponent,
    PokemonListComponent,
    PokemonViewComponent,
    ProcuradoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    PokemonRoutingModule
  ]
})
export class PokemonModule { }
