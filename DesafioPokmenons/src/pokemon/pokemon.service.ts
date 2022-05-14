import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/';



  constructor(
    private http: HttpClient
  ) { }

  listar():Observable<any> {return this.http.get(this.apiUrl+"?offset=0&limit=2000").pipe(
    tap((cadastros: any) =>console.log('Res lista cadastros', cadastros))
  );
  }

  listarpokemon(data: string):Observable<any> {return this.http.get(this.apiUrl + data +"/").pipe(
    tap((cadastros: any) =>console.log('Res lista cadastros', cadastros))
  );
  }
}
