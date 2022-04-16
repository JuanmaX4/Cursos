import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpService: HttpClient) { }

  public recuperarEntrada(): Observable<any> {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts')
  }
}
