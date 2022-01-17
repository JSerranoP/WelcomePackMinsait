import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyCreateResponse, SuperHeroRegister } from './my-creates.model';

const APIFakeUrl = 'http://localhost:3000/my-creates/';

@Injectable({
  providedIn: 'root'
})
export class MyCreatesService {

  constructor(private http: HttpClient) { }

  getMyCreates(): Observable<MyCreateResponse[]>{
    return this.http.get(APIFakeUrl) as Observable<MyCreateResponse[]>;
  }

  getMyCreate(id: string | null): Observable<MyCreateResponse>{
    return this.http.get(APIFakeUrl + id) as Observable<MyCreateResponse>;
  }

  deleteMyCreate(id: string) {
    return this.http.delete(APIFakeUrl + id).subscribe();
  }

  updateMyCreate(id: string | null, hero: SuperHeroRegister) {
    return this.http.put(APIFakeUrl + id, {hero}).subscribe();
  }
}
