import { Injectable } from '@angular/core';
import{HttpClient, HttpParams}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
   //private apiUrl='api.openweathermap.org/data/2.5/';
  //  private apiUrl='https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=';
  // private apiUrl='https://api.open-meteo.com/v1/dwd-icon?latitude=52.52&longitude=13.41&hourly=temperature_2m';
  //  private apiKey='<a7df637e2fba570e556b298e042ef86a>';
  //  private apiKey='9ab5349f543716e3e7435dc2ec7ff158';

  getWeather(city:string):Observable<Weather>{
    const options =new HttpParams()
    .set('units','metrics')
    .set('q',city)
     .set('appId',this.apiKey);
    return this.http.get<Weather>(this.apiUrl+'weather',{params:
      options});
  }
}
