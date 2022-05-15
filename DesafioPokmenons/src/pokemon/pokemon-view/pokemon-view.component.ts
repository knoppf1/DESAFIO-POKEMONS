import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit {
  id: number;
  itens: any[] = [];
  results: any[] = [];
  pokemon: any;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // this.load();
    this.loadpokemon();
  }

  load(){
    console.log('Load');
    this.pokemonService.listar().subscribe((res)=>{
      this.itens=res.results;
      console.log('Res', this.itens)
    })
  }

  loadpokemon(){
    console.log('Load');
    this.pokemonService.buscar(this.id).subscribe((res)=>{
      this.pokemon=res;
      console.log('Res Pokemon', this.itens)
    })
  }

}
