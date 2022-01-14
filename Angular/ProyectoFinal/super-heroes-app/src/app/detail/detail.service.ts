import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiSuperHero } from './detail.model';
import { Observable } from 'rxjs';

@Injectable()
export class DetailService {
  constructor(private http: HttpClient) { }

  getSuperheroes(id:string | null): Observable<ApiSuperHero>{
    const superheroeUrl = 'https://superheroapi.com/api/3135974543324900/' + id;
    return this.http.get(superheroeUrl) as Observable<ApiSuperHero>;
  }
}
