import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { School } from 'src/app/shared/types/School';

@Injectable({
  providedIn: 'root',
})
export class HomeApi {
  constructor(private http: HttpClient) {}

  fetchSchools(): Observable<School[]> {
    return this.http.get<School[]>('http://157.230.55.217/api/escolas').pipe();
  }
}
