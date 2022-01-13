import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const APIFakeUrl = 'http://localhost:3000/posts';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  addSuperHero(hero: string){
    return this.http.post(APIFakeUrl, {lol: hero}).subscribe();
  }
}
