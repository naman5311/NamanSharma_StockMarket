import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  path="http://localhost:5004";
  constructor(private http:HttpClient) { }

  public Upload(selectedFile: File) {
    const fd=new FormData();
    fd.append('image',selectedFile,selectedFile.name);
    console.log("formfa0"+fd);
    
    return this.http.post(this.path+`/UploadData`, fd);
  }
}

