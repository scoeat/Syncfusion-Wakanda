import { Component, OnInit } from '@angular/core';

import { Prospect } from '../prospect';
import { ProspectService } from '../prospect.service';

@Component({
  selector: 'app-prospect-http',
//  providers: [ProspectService],
  templateUrl: './prospect-http.component.html',
  styleUrls: ['./prospect-http.component.css']
})
export class ProspectHttpComponent implements OnInit {

  public prospects: any;

  constructor(
      private prospectService: ProspectService
    ) { }

  ngOnInit() {
    this.getProspects();
  }

  getProspects(): void {
    this.prospectService.getProspects()
    .subscribe(getProspectsResults => {
      this.prospects = getProspectsResults.entities;
    });
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.prospectService.addProspect({ name } as Prospect)
  //     .subscribe(prospect => {
  //       this.prospects.push(prospect);
  //     });
  // }

  // delete(prospect: Prospect): void {
  //   this.prospects = this.prospects.filter(h => h !== prospect);
  //   this.prospectService.deleteProspect(prospect).subscribe();
  // }

}
