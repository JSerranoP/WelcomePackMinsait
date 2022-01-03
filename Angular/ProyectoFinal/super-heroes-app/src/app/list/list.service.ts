import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const superheroeUrl = 'https://superheroapi.com/api/3135974543324900/search/a';

@Injectable()
export class ListService {

  constructor(private http: HttpClient) { }

  getSuperheroes() {
    return this.http.get(superheroeUrl);
  }
}
