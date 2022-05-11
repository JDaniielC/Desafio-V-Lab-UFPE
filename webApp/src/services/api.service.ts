import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { School } from 'src/types/School';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private endpoint = 'http://157.230.55.217/api/escolas';

  constructor(private http: HttpClient) {}

  fetchSchools(): Observable<School[]> {
    return this.http.get<School[]>(this.endpoint).pipe();
  }
}
