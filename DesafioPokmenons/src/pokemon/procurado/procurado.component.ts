import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-procurado',
  templateUrl: './procurado.component.html',
  styleUrls: ['./procurado.component.scss']
})
export class ProcuradoComponent implements OnInit {
  @Input() favoritos: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
