import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  itens: any[] = [];
  @Output() favoritos: any[] = [];
  results:  any[] = [];
  nomes: any = [];
  pokemon: any;
  frmForm: FormGroup;

  constructor(
    private pokemonService: PokemonService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.frmForm = this.createForm();
    this.load();
  }

  createForm(): FormGroup {
    return this.fb.group({
     nome : [''],
    });
 }

  load(){
    this.nomes= { nome: [], url:[] };
    this.pokemonService.listar().subscribe((res)=>{
      this.itens=res.results;
      console.log('This itens', this.itens);
      this.itens.forEach(results => {
        this.nomes.nome.push(results.name)
      });

    })
    console.log('Nomes1', this.nomes.nome);
    return this.nomes;
  }

  loadpokemon(){
    const nome = this.frmForm.value.nome;
    this.pokemonService.listarpokemon(nome).subscribe((res)=>{
      this.pokemon=res;
      this.favoritos.push(res);
      console.log('Res Pokemon', this.itens)
      console.log('favoritos', this.favoritos)
    })
  }

}
function data(data: any) {
  throw new Error('Function not implemented.');
}

