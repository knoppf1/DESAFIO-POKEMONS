import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../model/Pokemon';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  @Input()
  pokemon!:Pokemon;

  ngOnInit(): void {
  }

}
