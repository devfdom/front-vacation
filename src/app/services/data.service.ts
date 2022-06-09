import { Injectable } from '@angular/core';

// Import HttpClient and add it to constructor
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
    ) { }

    // Get Properties from API
    // limit: number of Properties
    // offset: the Properties "page"
    // api will return first page, then second, third, etc
    // This is how api works and how we use it on our app
    getProperties(limit: number, offset: number){
      // connect to the api requesting just 10 Properties
      // that is how this api is built
      // If it's the first page, return normally.
      // If not, multiply by "limit" to skip previous page Properties
      if(offset>0){
        offset *= limit;
      }
      return this.http.get(`https://pet-vacation.co/properties?limit=${limit}&offset=${offset}`)
    }

    // Get More Properties from Api
    getMoreData(name: string){
      // return data from Properties we passed as name
      return this.http.get(`https://pet-vacation.co/properties/${name}`);
    }
}