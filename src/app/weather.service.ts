import { Injectable } from '@angular/core';
import{HttpClient, HttpParams}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  private apiUrl='api.openweathermap.org/data/2.5/';
  private apiKey='<a7df637e2fba570e556b298e042ef86a>';

  getWeather(city:string):Observable<Weather>{
    const options =new HttpParams()
    .set('units','metrics')
    .set('q',city)
    .set('appId',this.apiKey);
    return this.http.get<Weather>(this.apiUrl+'weather',{params:
      options});
  }
}
