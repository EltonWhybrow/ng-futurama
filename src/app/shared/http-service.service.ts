import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { IShowInfo } from './show.interface';
import { ICharacter } from './character.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_API = 'https://api.sampleapis.com/futurama/';

  constructor(private http: HttpClient) { }

  getShowInfo(): Observable<IShowInfo> {
    return this.http.get<IShowInfo[]>(this.BASE_API + '/info')
      .pipe(
        map(info => info[0]),
        tap(info => console.log("info: " + JSON.stringify(info))),
        catchError(this.handleError<any>([]))
      );
  }

  getCharacters(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(this.BASE_API + '/characters')
      .pipe(
        map(characters => characters),
        tap(characters => console.log("characters: " + JSON.stringify(characters))),
        catchError(this.handleError<any[]>([]))
      );
  }

  getCharacterDetails(id: number): Observable<ICharacter> {
    return this.http.get<ICharacter>(this.BASE_API + '/characters/' + id)
      .pipe(
        map(details => details),
        tap(details => console.log("details: " + JSON.stringify(details))),
        catchError(this.handleError<any>([]))
      );
  }

  private handleError<T>(result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }
}
