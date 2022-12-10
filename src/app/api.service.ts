import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient){}
  fetchNews=()=>
  {return this.http.get("https://api.currentsapi.services/v1/latest-news?apiKey=U-XmBmaUdXRKTjs8SArUl92shkj5w-UpjNJdULWcBQEmHhdl")}
}
