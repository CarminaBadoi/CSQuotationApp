import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://swapi.co/api/people';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl:string;
  constructor(private http:HttpClient) { }

getCompanies() :Observable <any>{
  return this.http.get(this.apiUrl);
}
  
  
  
}
