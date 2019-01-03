import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataStateChangeEventArgs, Sorts, DataResult } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WakandaRestService extends Subject<DataStateChangeEventArgs> {
    // private BASE_URL = 'http://localhost:4200/rest/Prospect';

    // constructor(private http: HttpClient) {
    //     super();
    // }

    // public execute(state: any): void {
    //     this.getData(state).subscribe(x => super.next(x));
    // }

    // protected getData(state: DataStateChangeEventArgs): Observable<DataStateChangeEventArgs> {
    //     const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
    //     let sortQuery = '';

    //     if ((state.sorted || []).length) {
    //         sortQuery = `&$orderby=` + state.sorted.map((obj: Sorts) => {
    //             return obj.direction === 'descending' ? `${obj.name} desc` : obj.name;
    //         }).reverse().join(',');
    //     }

    //     return this.http
    //        .get(`${this.BASE_URL}?${pageQuery}${sortQuery}&$inlinecount=allpages&$format=json`)
    //        .map((response: any) => response.json())
    //        .map((response: any) => (<DataResult>{
    //             result: response['entities'],
    //             count: parseInt(response['__count'], 10)
    //     }))
    //     .pipe((restdata: any) => restdata);
    // }
 }
