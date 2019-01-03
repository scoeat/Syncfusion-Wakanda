import { Component, OnInit } from '@angular/core';
import { WakandaService } from '../../services/wakanda.service';

@Component({
  selector: 'app-prospect-edit',
  providers: [WakandaService],
  templateUrl: './prospect-edit.component.html',
  styleUrls: ['./prospect-edit.component.css']
})
export class ProspectEditComponent implements OnInit {
  public PID: any;
  public pName: any;
  public pNameLast: any;
  public prospectData: any;

  constructor(public wakanda: WakandaService) {
  }

  ngOnInit(): void {
    this.wakanda.getCatalog().then(ds => {
      // ds.Prospect.query({
      //   filter: 'ID == 1841029'
      // })
      ds.Prospect.find(1841029)
      .then(result => {
        // this.prospectData = result.entities[0];
        this.prospectData = result;
        this.PID = this.prospectData.ID;
        this.pName = this.prospectData.nameFull;
        this.pNameLast = this.prospectData.nameLast;
      });
    });
    this.wakanda.directory.login('scott', 'Montan@1')
        .then(loginResult => {
          console.log(loginResult);
          this.wakanda.directory.getCurrentUser()
            .then(wakUser => {
              console.log(wakUser);
            });
        });
}

}
