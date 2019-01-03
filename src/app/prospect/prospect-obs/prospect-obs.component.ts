import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
// import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DataStateChangeEventArgs, GroupSettingsModel, PageSettingsModel, VirtualScrollService } from '@syncfusion/ej2-angular-grids';
import { ProspectObsService } from '../../services/prospect-obs.service';
// import { DataService } from './data.service';

@Component({
  selector: 'app-prospect-obs',
  templateUrl: './prospect-obs.component.html',
  styleUrls: ['./prospect-obs.component.css'],
  providers: [VirtualScrollService]
})
export class ProspectObsComponent implements OnInit {

  public data: Observable<DataStateChangeEventArgs>;
  // public pageOptions: Object;
  public state: DataStateChangeEventArgs;
  public groupSettings: GroupSettingsModel;
  public pageSettings: PageSettingsModel;
  constructor(@Inject(ProspectObsService) private service: ProspectObsService) {
       this.data = service;
  }

  public dataStateChange(state: DataStateChangeEventArgs): void {
      this.service.execute(state);
  }

  public ngOnInit(): void {
      // this.pageOptions = { pageCount: 7 };
      this.state = {
        skip: 0, take: 50
      };
      this.service.execute(this.state);
      this.pageSettings = {
        pageSize: 50
      };
  }
}
