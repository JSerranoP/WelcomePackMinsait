import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SuperHeroResponse } from './list.model';
import { Observable } from 'rxjs';

const superHeroUrl = 'https://superheroapi.com/api/3135974543324900/search/a';

@Injectable()
export class ListService {

  constructor(private http: HttpClient) { }

  getSuperHeros(): Observable<SuperHeroResponse>{
    return this.http.get(superHeroUrl) as Observable<SuperHeroResponse>;
  }
}
