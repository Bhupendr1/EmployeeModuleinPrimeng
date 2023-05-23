

import { Component, Input, OnInit } from '@angular/core';
import { _ServiceApi } from 'src/app/Services/service.service';

@Component({
  selector: 'app-family-nominee',
  templateUrl: './family-nominee.component.html',
  styleUrls: ['./family-nominee.component.css']
})
export class FamilyNomineeComponent implements OnInit {
  @Input() item = '';
  familyDetails: any;
  nomineeOfArrears: any;
  nomineeOfCommutation: any;
  nomineeOfGratuity: any;
  //
  todayDate: Date = new Date();
  name = "HK";
  familyCardField: string[] = ['TITLE', 'NAME', 'DATE OF BIRTH', 'RELATION', 'MARTIAL STATUS', 'HANDICAP',
    'PERCENTAGE OF DISABILITY', 'ADDRESS', 'ADHAAR', 'PAN', 'BANK AC.NO', 'EMPLOYMENT', 'JANAADHAAR', 'SSO.ID', 'INCOME AMOUNT'];

  constructor(private _Service: _ServiceApi) { }

  ngOnInit(): void {
    this.getFamilyDetails();
    // this.getNominationForArrears();
    // this.getNominationForCommutation();
    // this.getNominationForGratuity();
  }


  // Call Api for getting family details
  getFamilyDetails() {
    let data = {
      "employeeCode": "CODE001"
    }
    this._Service.postRequestPensionLoan(data, "getFamilyDetailsByEmpCode").subscribe({
      next: (response) => {
        if (response.status = 200) {
          this.familyDetails = response.data;
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
      }
    });
  }


  // Call Api for getting nominee for arrears
  getNominationForArrears() {
    let data = {
      "employeeCode": "CODE001"
    }
    this._Service.postRequestPensionLoan(data, "fetchFamilyDetailsByEmpCode").subscribe({
      next: (response) => {
        if (response.status = 200) {
          this.nomineeOfArrears = response.data;
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
      }

    });
  }

  // Call Api for getting nominee for commutation
  getNominationForCommutation() {
    let data = {
      "employeeCode": "CODE001"
    }
    this._Service.postRequestPensionLoan(data, "fetchFamilyDetailsByEmpCode").subscribe({
      next: (response) => {
        if (response.status = 200) {
          this.nomineeOfCommutation = response.data;
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
      }

    });
  }

  getNominationForGratuity() {
    let data = {
      "employeeCode": "CODE001"
    }
    this._Service.postRequestPensionLoan(data, "fetchFamilyDetailsByEmpCode").subscribe({
      next: (response) => {
        if (response.status = 200) {
          this.nomineeOfGratuity = response.data;
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
      }

    });
  }

}
