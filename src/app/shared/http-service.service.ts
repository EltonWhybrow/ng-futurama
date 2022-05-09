import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { IShowInfo } from './show.interface';
import { ICharacter } from './character.interface';
import { IQuestions } from './questions.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_API = 'https://api.sampleapis.com/futurama';

  constructor(private http: HttpClient) { }

  // TODO: implement as Angualar resolvers if time to enhance user experience
  getQuestions(): Observable<IQuestions[]> {
    return this.http.get<IQuestions[]>(this.BASE_API + '/questions')
      .pipe(
        map(questions => questions),
        tap(questions => console.log("questions: " + JSON.stringify(questions))),
        catchError(this.handleError<any[]>([]))
      );
  }

  getShowInfo(): Observable<IShowInfo[]> {
    return this.http.get<IShowInfo[]>(this.BASE_API + '/info')
      .pipe(
        map(info => info),
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
