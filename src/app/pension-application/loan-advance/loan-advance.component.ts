

  import { Component, OnInit } from '@angular/core';
  import { _ServiceApi } from 'src/app/Services/service.service';
 
  @Component({
    selector: 'app-loan-advance',
    templateUrl: './loan-advance.component.html',
    styleUrls: ['./loan-advance.component.css']
  })
  export class LoanAdvanceComponent implements OnInit {
  
    endPointForLoanAndAdvancesDetails = "getloanDetails";
    loanAndAdvancesDetails: any;
    constructor(private _Service: _ServiceApi) { }
    ngOnInit(): void {
      this.getLoanAndAdvancesDetails();
    }
  
    // Call Api for getting Loan And Advances details
    getLoanAndAdvancesDetails() {
      let data = {
        "employeeCode": "CODE001"
      }
      this._Service.postRequestPensionLoan(null, this.endPointForLoanAndAdvancesDetails).subscribe({
        next: (response) => {
          console.log("responce :" + JSON.stringify(response.data));
          if (response.status = 200) {
            this.loanAndAdvancesDetails = response.data;
            console.log("responce :" + JSON.stringify(response.data));
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
  