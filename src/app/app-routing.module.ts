import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProspectListComponent } from './prospect/prospect-list/prospect-list.component';
import { ProspectObsComponent } from './prospect/prospect-obs/prospect-obs.component';
import { ProspectEditComponent } from './prospect/prospect-edit/prospect-edit.component';
import { ProspectEditDMComponent } from './prospect/prospect-edit-dm/prospect-edit-dm.component';


const routes: Routes = [
  { path: '', redirectTo: '/prospectEditDM', pathMatch: 'full' },
  { path: 'prospectWakanda', component: ProspectListComponent },
  { path: 'prospectEdit', component: ProspectEditComponent },
  { path: 'prospectEditDM', component: ProspectEditDMComponent },
  { path: 'prospectObservable', component: ProspectObsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
