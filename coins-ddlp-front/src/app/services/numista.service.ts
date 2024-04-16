import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumistaService {

  url: string = 'https://api.numista.com/api/v3/types/'
  apiKey: string = 'ZWVN8Q87MJXAIXGt0I85MCvByduI7c6MioDnA6ZY'

  constructor(private _http: HttpClient) { }

  getCoinByIdNum(idNum: string): Observable<any> {
    const headers = new HttpHeaders({
      'Numista-API-Key': this.apiKey
    })
    return this._http.get(this.url + idNum + '?lang=es', { headers })
  }
}
