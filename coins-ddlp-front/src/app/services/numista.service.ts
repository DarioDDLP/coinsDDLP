import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumistaService {
  // Services
  private _http = inject(HttpClient);

  url: string = 'https://api.numista.com/api/v3/types/'
  apiKey: string = 'ZWVN8Q87MJXAIXGt0I85MCvByduI7c6MioDnA6ZY'

  getCoinByIdNum(idNum: string): Observable<any> {
    const headers = new HttpHeaders({
      'Numista-API-Key': this.apiKey
    })
    return this._http.get(this.url + idNum + '?lang=es', { headers })
  }
}
