import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit {

  itens: any[] = [];
  results: any[] = [];
  pokemon: any;

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    // this.load();
    // this.loadpokemon();
  }

  load(){
    console.log('Load');
    this.pokemonService.listar().subscribe((res)=>{
      this.itens=res.results;
      console.log('Res', this.itens)
    })
  }

  // loadpokemon(){
  //   console.log('Load');
  //   this.pokemonService.listarpokemon().subscribe((res)=>{
  //     this.pokemon=res;
  //     console.log('Res Pokemon', this.itens)
  //   })
  // }

}
