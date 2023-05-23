import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { _ServiceApi } from 'src/app/Services/service.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-documents-uploaded',
  templateUrl: './documents-uploaded.component.html',
  styleUrls: ['./documents-uploaded.component.css']
})
export class DocumentsUploadedComponent implements OnInit {
  uploadProgress = 0;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
    files: any[] = [];
    RetirementOrderfiles: any[] = [];
    Govt_files: any[] = [];
    No_DE_files: any[] = [];
    Bank_files: any[] = [];
    No_DuesFile: any[] = [];
    Single_files: any[] = [];
    NSDL_files: any[] = [];
    Accommodation_File: any[] = [];
    Joint_files: any[] = [];
    url:any;
    id:any;
    File_name:any;
    doc_list: any[] = [];
    show:boolean=false
    fromAssetsFolder:any;
    Retirementshow:boolean=true;
    Govt_show:boolean=true;
    No_DE_show:boolean=true;
    Bank_show:boolean=true;
    NODue_show:boolean=true;
    Single_show:boolean=true;
    NSDL_show:boolean=true;
    Joint_show:boolean=true;
    Accommodation_show:boolean=true;
    constructor(private routers:Router ,private _snackBar: MatSnackBar,private http: HttpClient,private _Servise:_ServiceApi) { }

  ngOnInit(): void {
    
    let data ={
      
        "employeeCode":"CODE001"
    
    }
 this._Servise.postRequest_Doc(data,'getAllUploadedDocumentDetailsByEmployeeCode').subscribe((res)=>{
  debugger
  this.doc_list=res.data;
this.File_name=res.data.documentName
  let filename={
    "progress": 0,
    "lastModified":1672922117392,
    "lastModifiedDate": "Thu Jan 05 2023 18:05:17 GMT+0530 (India Standard Time)",
    "name": res.data[0].documentName,
    "size": 4250,
    "type": "image/jpeg",
    "webkitRelativePath":"",
  }

  //this.Single_files.push(filename); 
 }

 )
  }

  
    /**
     * on file drop handler
     */
    onFileDropped($event: any) {
      this.prepareFilesList($event);
    }
  
    /**
     * handle file from browsing
     */
    Pdf:string='';
    fileBrowseHandler(event:any) {
      this.prepareFilesList(event.target.files);   
   
    }


    
    /**
     * Delete file from files list
     * @param index (File index)
     */
    deleteFile(index: number) {
      this.files.splice(index, 1);
    }
  
    /**
     * Simulate the upload process
     */
    uploadFilesSimulator(index: number) {
      setTimeout(() => {
        if (index === this.files.length) {
          return;
        } else {
          const progressInterval = setInterval(() => {
            debugger
            if (this.files[index].progress === 100) {
              clearInterval(progressInterval);
              this.uploadFilesSimulator(index + 1);
            } else {
              this.files[index].progress += 10;
            }
          }, 50);
        }
      }, 500);
    }
  
    /**
     * Convert Files list to normal array list
     * @param files (Files List)
     */
  prepareFilesList(files: Array<any>) {

  for (const item of files) {
      for (let i = 0; i < this.files.length; i++) {
        debugger
        if (this.files[i].name === item.name) {
          this._snackBar.open('Error occurred :- ', 'File is already Exist', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        
          return;
        }
        
      }
       item.progress = 0;
          this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  
  }
  
    /**
     * format bytes
     * @param bytes (File size in bytes)
     * @param decimals (Decimals point)
     */
    formatBytes(bytes:any, decimals:any) {
      if (bytes === 0) {
        return '0 Bytes';
      }
      const k = 1024;
      const dm = decimals <= 0 ? 0 : decimals || 2;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  
  
    // ********************Strat Retirement Order***********************************

    RetirementOrder1(event:any) {
      alert();
      debugger
      this.RetirementOrderList(event.target.files);     
    }
    RetirementOrderList(files: Array<any>) {
      debugger
      for (const item of files) {      
           item.progress = 0;
              this.RetirementOrderfiles.push(item);  
              this.Retirementshow=false;            
        }
        this.RetirementuploadFilesSimulator(0);
      
      }
      Files_Delete(index: number) {
        this.RetirementOrderfiles.splice(index, 1);
        this.Retirementshow=true; 
      }
      RetirementuploadFilesSimulator(index: number) {
        setTimeout(() => {
          if (index === this.RetirementOrderfiles.length) {
            return;
          } else {
            const progressInterval = setInterval(() => {
              debugger
              if (this.RetirementOrderfiles[index].progress === 100) {
                clearInterval(progressInterval);               
              } else {
                this.RetirementOrderfiles[index].progress += 10;
              }
            }, 50);
          }
        }, 500);
      }
// ********************END Retirement Order ************************************

// ********************Strat Retirement Order***********************************

    GovtBrowseHandler(event:any) {
      this.GovtList(event.target.files);     
    }
    GovtList(files: Array<any>) {
      for (const item of files) {      
           item.progress = 0;
           debugger
           
              this.Govt_files.push(item);  
              this.Govt_show=false;            
        }
        this.GovtuploadFilesSimulator(0);
      
      }
      Govt_Delete(index: number) {
        this.Govt_files.splice(index, 1);
        this.Govt_show=true; 
      }
      GovtuploadFilesSimulator(index: number) {
        setTimeout(() => {
          if (index === this.Govt_files.length) {
            return;
          } else {
            const progressInterval = setInterval(() => {
              debugger
              if (this.Govt_files[index].progress === 100) {
                clearInterval(progressInterval);
               
              } else {
                this.Govt_files[index].progress += 10;
              }
            }, 50);
          }
        }, 500);
      }
// ********************END Retirement Order ************************************

// ********************Strat Retirement Order***********************************

No_DE_Certificate(event:any) {
  this.No_DE_CertificateList(event.target.files);     
}
No_DE_CertificateList(files: Array<any>) {
  for (const item of files) {      
       item.progress = 0;
          this.No_DE_files.push(item);  
          this.No_DE_show=false;            
    }
    this.No_DESimulator(0);  
  }
  No_DE_Delete(index: number) {
    this.No_DE_files.splice(index, 1);
    this.No_DE_show=true; 
  }
  No_DESimulator(index: number) {
    setTimeout(() => {
      if (index === this.No_DE_files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          debugger
          if (this.No_DE_files[index].progress === 100) {
            clearInterval(progressInterval);
           
          } else {
            this.No_DE_files[index].progress += 10;
          }
        }, 50);
      }
    }, 500);
  }
// ********************END Retirement Order ***********************************
// ********************Strat Retirement Order***********************************

Bank_Passbook(event:any) {
  this.Bank_CertificateList(event.target.files);     
}
Bank_CertificateList(files: Array<any>) {
  for (const item of files) {      
       item.progress = 0;
          this.Bank_files.push(item);  
          this.Bank_show=false;            
    }
    this.Bank_Simulator(0);  
  }
  Bank_PassbookDelete(index: number) {
    this.Bank_files.splice(index, 1);
    this.Bank_show=true; 
  }
  Bank_Simulator(index: number) {
    setTimeout(() => {
      if (index === this.Bank_files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          debugger
          if (this.Bank_files[index].progress === 100) {
            clearInterval(progressInterval);
           
          } else {
            this.Bank_files[index].progress += 10;
          }
        }, 50);
      }
    }, 500);
  }
// ********************END Retirement Order ***********************************

// ********************Strat Retirement Order***********************************

NoDues_Certificate(event:any) {
  this.NoDues_CertificateList(event.target.files);     
}
NoDues_CertificateList(files: Array<any>) {
  for (const item of files) {      
       item.progress = 0;
          this.No_DuesFile.push(item);  
          this.NODue_show=false;            
    }
    this.NoDues_Simulator(0);  
  }
  NoDues_PassbookDelete(index: number) {
    this.No_DuesFile.splice(index, 1);
    this.NODue_show=true; 
  }
  NoDues_Simulator(index: number) {
    setTimeout(() => {
      if (index === this.No_DuesFile.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          debugger
          if (this.No_DuesFile[index].progress === 100) {
            clearInterval(progressInterval);
           
          } else {
            this.No_DuesFile[index].progress += 10;
          }
        }, 50);
      }
    }, 500);
  }
// ********************END Retirement Order ***********************************

// ********************Strat Retirement Order***********************************

Singleon(event:any,id:any) {
  debugger
  this.id=id
  this.Single_CertificateList(event.target.files);     
}
Single_CertificateList(files: Array<any>) {
  for (const item of files) {      
       item.progress = 0;
          this.Single_files.push(item);  
          this.Single_show=false;            
    }
   // this.Single_Simulator(0);  
  }
  Single_Delete(index: number) {
    debugger
    this.Single_files.splice(index, 1);
    this.Single_show=true;
    this.id=''
  }
  Single_Simulator(index: number) {
    setTimeout(() => {
      if (index === this.Single_files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          debugger
          if (this.Single_files[index].progress === 100) {
            clearInterval(progressInterval);
           
          } else {
            this.Single_files[index].progress += 10;
          }
        }, 50);
      }
    }, 500);
  }
// ********************END Retirement Order ***********************************
// ********************Strat Retirement Order***********************************

NSDL_On(event:any) {
  this.NSDL_CertificateList(event.target.files);     
}
NSDL_CertificateList(files: Array<any>) {
  for (const item of files) {      
       item.progress = 0;
          this.NSDL_files.push(item);  
          this.NSDL_show=false;            
    }
    this.NSDL_Simulator(0);  
  }
  NSDL_Delete(index: number) {
    this.NSDL_files.splice(index, 1);
    this.NSDL_show=true; 
  }
  NSDL_Simulator(index: number) {
    setTimeout(() => {
      if (index === this.NSDL_files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          debugger
          if (this.NSDL_files[index].progress === 100) {
            clearInterval(progressInterval);
           
          } else {
            this.NSDL_files[index].progress += 10;
          }
        }, 50);
      }
    }, 500);
  }
// ********************END Retirement Order ***********************************

// ********************Strat Retirement Order***********************************

Joint_On(event:any) {
  this.Joint_CertificateList(event.target.files);     
}
Joint_CertificateList(files: Array<any>) {
  for (const item of files) {      
       item.progress = 0;
          this.Joint_files.push(item);  
          this.Joint_show=false;            
    }
    this.Joint_Simulator(0);  
  }
  Joint_Delete(index: number) {
    this.Joint_files.splice(index, 1);
    this.Joint_show=true; 
  }
  Joint_Simulator(index: number) {
    setTimeout(() => {
      if (index === this.Joint_files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          debugger
          if (this.Joint_files[index].progress === 100) {
            clearInterval(progressInterval);
           
          } else {
            this.Joint_files[index].progress += 10;
          }
        }, 50);
      }
    }, 500);
  }
// ********************END Retirement Order ***********************************
// ********************Strat Retirement Order***********************************

Accommodation_On(event:any) {
  this.AccommodationList(event.target.files);     
}
AccommodationList(files: Array<any>) {
  for (const item of files) {      
       item.progress = 0;
          this.Accommodation_File.push(item);  
          this.Accommodation_show=false;            
    }
    this.Accommodation_Simulator(0);  
  }
  Accommodation_delete(index: number) {
    this.Accommodation_File.splice(index, 1);
    this.Accommodation_show=true; 
  }
  Accommodation_Simulator(index: number) {
    setTimeout(() => {
      if (index === this.Accommodation_File.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          debugger
          if (this.Accommodation_File[index].progress === 100) {
            clearInterval(progressInterval);
           
          } else {
            this.Accommodation_File[index].progress += 10;
          }
        }, 50);
      }
    }, 500);
  }
// ********************END Retirement Order ***********************************

    }
    

