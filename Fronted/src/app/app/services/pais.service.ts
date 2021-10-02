import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais.model';

const baseURL = "http://localhost:8090/url/lista";
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) { }

  listaPais():Observable<Pais[]>{

    return this.http.get<Pais[]>(baseURL+"/pais");

  }

}
