import { Component, OnInit } from '@angular/core';
import { WakandaService } from '../../services/wakanda.service';

@Component({
  selector: 'app-prospect-list',
  providers: [WakandaService],
  templateUrl: './prospect-list.component.html',
  styleUrls: ['./prospect-list.component.css']
})
export class ProspectListComponent implements OnInit {

  public prospectData: any;

  constructor(public wakanda: WakandaService) {
  }

  ngOnInit(): void {
    this.wakanda.getCatalog().then(ds => {
      ds.Prospect.query({
        filter: ''
      }).then(result => {
        this.prospectData = result.entities;
      });
    });
}

}
