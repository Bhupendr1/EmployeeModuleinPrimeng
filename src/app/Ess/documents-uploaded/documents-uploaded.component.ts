import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
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
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
    files: any[] = [];
    url:any;
    show:boolean=false
    fromAssetsFolder:any;
    constructor(private routers:Router ,private _snackBar: MatSnackBar,private http: HttpClient) { }

  ngOnInit(): void {
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
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.url = event.target.result;
     this.getFiles(event.target.files);
    }

    getFiles(files: Array<any>) { 
debugger
 
    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('image', files[0].name);
    /* Image Post Request */
    this.http.post('/assets/images/'+ myFormData, {
    headers: headers
    }).subscribe(data => {
     //Check success message
     console.log("save",data);
    });  
 
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
  
  
    }
    

