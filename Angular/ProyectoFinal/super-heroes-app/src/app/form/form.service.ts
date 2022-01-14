import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SuperHeroRegister } from './form.model';

const APIFakeUrl = 'http://localhost:3000/posts';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  addSuperHero(hero: SuperHeroRegister){
    return this.http.post(APIFakeUrl, {hero}).subscribe();
  }
}
