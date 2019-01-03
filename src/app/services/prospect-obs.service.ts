import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataStateChangeEventArgs, Sorts, DataResult } from '@syncfusion/ej2-angular-grids';

@Injectable({
  providedIn: 'root'
})
export class ProspectObsService extends Subject<Object> {
  private BASE_URL = 'http://localhost:4200/rest/Prospect';
  // private dataManager = new DataManager({
  //   url: this.BASE_URL,
  //   crossDomain: true
  // });
  constructor(private http: HttpClient) {
      super();
  }
  public getData(state: DataStateChangeEventArgs): Observable<DataStateChangeEventArgs> {
    const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
    let sortQuery = '';

    if ((state.sorted || []).length) {
        sortQuery = `&$orderby=` + state.sorted.map((obj: Sorts) => {
            return obj.direction === 'descending' ? `${obj.name} desc` : obj.name;
        }).reverse().join(',');
    }
    return this.http
      .get(`${this.BASE_URL}?${pageQuery}${sortQuery}&$inlinecount=allpages&$format=json`)
      .pipe(
        map((response: any) => (<DataResult>{
                result: response['__ENTITIES'],
                count: parseInt(response['__COUNT'], 10)
            })))
      .pipe((data: any) => data);
  }
  public execute(state: DataStateChangeEventArgs): void {
    this.getData(state).subscribe(x => {
      super.next(x);
    });
  }
}
