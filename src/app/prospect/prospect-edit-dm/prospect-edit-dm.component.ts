import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ReturnOption, ODataAdaptor, ODataV4Adaptor, UrlAdaptor  } from '@syncfusion/ej2-data';
import { FormControl, FormGroup, Validators, FormsModule, AbstractControl } from '@angular/forms';
import { FormValidators } from '@syncfusion/ej2-angular-inputs';

const svc_URI = 'http://localhost:4200/rest/Prospect(1841029)';

@Component({
  selector: 'app-prospect-edit-dm',
  templateUrl: './prospect-edit-dm.component.html',
  styleUrls: ['./prospect-edit-dm.component.css']
})
export class ProspectEditDMComponent implements OnInit {
  reactForm: FormGroup;

  public pEditDM: any;
  public pNameFull: any;
  public pEmail: any;
  public pDOB: any;
  public pAddr1: any;
  public pCity: any;
  public pState: any;

  constructor() {
    this.reactForm = new FormGroup({
      'check': new FormControl('', [FormValidators.required]),
      'email_check': new FormControl('', [FormValidators.email]),
      'date_check': new FormControl('', [FormValidators.date]),
      'city': new FormControl('', [FormValidators.required]),
      'state': new FormControl('', [FormValidators.required]),
      'address1': new FormControl(''),
    });
  }

  ngOnInit(): void {
    new DataManager({ url: svc_URI, adaptor: new ODataV4Adaptor})
      .executeQuery(new Query())
        .then((e: any) => {
          this.pEditDM = e.result;
          this.pNameFull = this.pEditDM.nameFull;
          this.pEmail = this.pEditDM.email1;
          this.pDOB = this.pEditDM.dateImportOriginal;
          this.pAddr1 = this.pEditDM.addressLine1;
          this.pCity = this.pEditDM.addressCity;
          this.pState = this.pEditDM.addressState;
          console.log(e.result);
          console.log(e);
        })
        .catch((e) => true);

        const formId: HTMLElement = <HTMLElement>document.getElementById('formId');
        document.getElementById('formId').addEventListener(
          'submit',
          (e: Event) => {
            e.preventDefault();
            if (this.reactForm.valid) {
              alert('Customer details added!');
              this.reactForm.reset();
            } else {
              // validating whole form
              Object.keys(this.reactForm.controls).forEach(field => {
                const control = this.reactForm.get(field);
                control.markAsTouched({ onlySelf: true });
              });
            }
          });
      }
      get check() { return this.reactForm.get('check'); }
      get email_check() { return this.reactForm.get('email_check'); }
      get date_check() { return this.reactForm.get('date_check'); }
      get city() { return this.reactForm.get('city'); }
      get state() { return this.reactForm.get('state'); }
      get address1() { return this.reactForm.get('address1'); }
}
