import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyCreateResponse } from './my-creates.model';

const superheroeUrl = 'http://localhost:3000/my-creates';

@Injectable({
  providedIn: 'root'
})
export class MyCreatesService {

  constructor(private http: HttpClient) { }

  getMyCreates(): Observable<MyCreateResponse[]>{
    return this.http.get(superheroeUrl) as Observable<MyCreateResponse[]>;
  }
}
