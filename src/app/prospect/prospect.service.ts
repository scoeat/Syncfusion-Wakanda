import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

 import { Prospect } from './prospect';
import { MessageService } from '../core/messages/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ProspectService {

  private prospectsUrl = 'rest/Prospect';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET prospects from the server */
  getProspects (): any {
    return this.http.get(this.prospectsUrl)
      .pipe(
        tap(_ => this.log('fetched prospects'))  ,
        catchError(this.handleError('getProspects', []))
      );
  }


  // getProspects (): Observable<Prospect[]> {
  //   return this.http.get<Prospect[]>(this.prospectsUrl)
  //     .pipe(
  //       tap(_ => this.log('fetched prospects'))  ,
  //       catchError(this.handleError('getProspects', []))
  //     );
  // }

  // /** GET prospect by id. Return `undefined` when id not found */
  // getProspectNo404<Data>(id: number): Observable<Prospect> {
  //   const url = `${this.prospectsUrl}/?id=${id}`;
  //   return this.http.get<Prospect[]>(url)
  //     .pipe(
  //       map(prospects => prospects[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} prospect id=${id}`);
  //       }),
  //       catchError(this.handleError<Prospect>(`getProspect id=${id}`))
  //     );
  // }

  // /** GET prospect by id. Will 404 if id not found */
  // getProspect(id: number): Observable<Prospect> {
  //   const url = `${this.prospectsUrl}/${id}`;
  //   return this.http.get<Prospect>(url).pipe(
  //     tap(_ => this.log(`fetched prospect id=${id}`)),
  //     catchError(this.handleError<Prospect>(`getProspect id=${id}`))
  //   );
  // }

  // /* GET prospects whose name contains search term */
  // searchProspects(term: string): Observable<Prospect[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty prospect array.
  //     return of([]);
  //   }
  //   return this.http.get<Prospect[]>(`${this.prospectsUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found prospects matching "${term}"`)),
  //     catchError(this.handleError<Prospect[]>('searchProspects', []))
  //   );
  // }

  // //////// Save methods //////////

  // /** POST: add a new prospect to the server */
  // addProspect (prospect: Prospect): Observable<Prospect> {
  //   return this.http.post<Prospect>(this.prospectsUrl, prospect, httpOptions).pipe(
  //     tap((prospect: Prospect) => this.log(`added prospect w/ id=${prospect.id}`)),
  //     catchError(this.handleError<Prospect>('addProspect'))
  //   );
  // }

  // /** DELETE: delete the prospect from the server */
  // deleteProspect (prospect: Prospect | number): Observable<Prospect> {
  //   const id = typeof prospect === 'number' ? prospect : prospect.id;
  //   const url = `${this.prospectsUrl}/${id}`;

  //   return this.http.delete<Prospect>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted prospect id=${id}`)),
  //     catchError(this.handleError<Prospect>('deleteProspect'))
  //   );
  // }

  // /** PUT: update the prospect on the server */
  // updateProspect (prospect: Prospect): Observable<any> {
  //   return this.http.put(this.prospectsUrl, prospect, httpOptions).pipe(
  //     tap(_ => this.log(`updated prospect id=${prospect.id}`)),
  //     catchError(this.handleError<any>('updateProspect'))
  //   );
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ProspectService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProspectService: ${message}`);
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';

// import { Prospect } from './prospect';
// import { MessageService } from '../core/messages/message.service';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
// @Injectable({
//   providedIn: 'root'
// })
// export class ProspectService {

//   private prospectUrl = 'http://localhost:4200/rest/Prospect';  // URL to web api
//   public prospectHttp: any;
//   constructor(
//     private http: HttpClient,
//     private messageService: MessageService,
//     private map: map) { }


//   /** GET prospects from the server */
//   getProspects (): Observable<Prospect[]> {
//     return this.http.get<Prospect[]>(this.prospectUrl)
//       .map((response: any) => response.json())
//       .map((response: any) => this.prospectHttp = response.entities)
//       .pipe(
//         tap(_ => this.log('fetched prospects')),
//         catchError(this.handleError('getProspects', []))
//       );
//   }

  // /** GET prospect by id. Return `undefined` when id not found */
  // getProspectNo404<Data>(id: number): Observable<Prospect> {
  //   const url = `${this.prospectUrl}/?id=${id}`;
  //   return this.http.get<Prospect[]>(url)
  //     .pipe(
  //       map(prospects => prospects[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} prospect id=${id}`);
  //       }),
  //       catchError(this.handleError<Prospect>(`getProspect id=${id}`))
  //     );
  // }

  // /** GET prospect by id. Will 404 if id not found */
  // getProspect(id: number): Observable<Prospect> {
  //   const url = `${this.prospectUrl}/${id}`;
  //   return this.http.get<Prospect>(url).pipe(
  //     tap(_ => this.log(`fetched prospect id=${id}`)),
  //     catchError(this.handleError<Prospect>(`getProspect id=${id}`))
  //   );
  // }

  // /* GET prospectes whose name contains search term */
  // searchProspects(term: string): Observable<Prospect[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty prospect array.
  //     return of([]);
  //   }
  //   return this.http.get<Prospect[]>(`${this.prospectUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found prospects matching "${term}"`)),
  //     catchError(this.handleError<Prospect[]>('searchProspects', []))
  //   );
  // }

  // //////// Save methods //////////

  // /** POST: add a new prospect to the server */
  // addProspect (prospect: Prospect): Observable<Prospect> {
  //   return this.http.post<Prospect>(this.prospectUrl, prospect, httpOptions).pipe(
  //     tap((prospect: Prospect) => this.log(`added prospect w/ id=${prospect.id}`)),
  //     catchError(this.handleError<Prospect>('addprospect'))
  //   );
  // }

  // /** DELETE: delete the prospect from the server */
  // deleteProspect (prospect: Prospect | number): Observable<Prospect> {
  //   const id = typeof prospect === 'number' ? prospect : prospect.id;
  //   const url = `${this.prospectUrl}/${id}`;

  //   return this.http.delete<Prospect>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted prospect id=${id}`)),
  //     catchError(this.handleError<Prospect>('deleteProspect'))
  //   );
  // }

  // /** PUT: update the prospect on the server */
  // updateProspect (prospect: Prospect): Observable<any> {
  //   return this.http.put(this.prospectUrl, prospect, httpOptions).pipe(
  //     tap(_ => this.log(`updated prospect id=${prospect.id}`)),
  //     catchError(this.handleError<any>('updateProspect'))
  //   );
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
//    * @param operation - name of the operation that failed
//    * @param result - optional value to return as the observable result
//    */
//   private handleError<T> (operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {

//       // TODO: send the error to remote logging infrastructure
//       console.error(error); // log to console instead

//       // TODO: better job of transforming error for user consumption
//       this.log(`${operation} failed: ${error.message}`);

//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//     };
//   }

//   /** Log a ProspectService message with the MessageService */
//   private log(message: string) {
//     this.messageService.add(`ProspectService: ${message}`);
//   }
// }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
