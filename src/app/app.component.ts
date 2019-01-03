import { Component, OnInit } from '@angular/core';
import { SplitterComponent } from '@syncfusion/ej2-angular-layouts';
// import { localdata } from './services/datasource';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sync-cli';
//  public data: Object[];
// public contentLeft = 'Left Side Content';
// public contentMiddle = '<app-prospect-obs></app-prospect-obs>';
// public contentRight = 'Right Side Content';

public splitter: SplitterComponent;
  ngOnInit(): void {
}
}


/**
 *  Sample for default functionalities
 */

