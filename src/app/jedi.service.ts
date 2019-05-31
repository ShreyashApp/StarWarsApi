import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JediService {

  constructor(private http:HttpClient) { }

  getCharacters(charac){
    return this.http.get(charac);
  }

  getFilms(selectFilms){
    var i = selectFilms.length;
    var filmlink = [];
    var j=0;
    while(i!=0){
      i--;
      filmlink[j] = this.http.get(selectFilms[j]);
      j++;
    }
    return forkJoin(filmlink);
    }

}
