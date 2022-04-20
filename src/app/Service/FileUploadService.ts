import {HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest} from '@angular/common/http';
import { map } from  'rxjs/operators';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  SERVER_URL: string = "https://file.io/";
  resourceUrl: string = "http://localhost:8080/api/employee-mgt/employee-static-files/id-card";

  constructor(private httpClient: HttpClient) { }

  public upload(formData: FormData) {

    return this.httpClient.post<any>(this.SERVER_URL, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }


  public uploadImage(file: FileList): void {
    const formData: FormData = new FormData();


    formData.append('file', file[0]);
    /*const req = new HttpRequest('POST', this.resourceUrl, formData, {
      reportProgress: true,
      responseType: 'json',
    });*/

    this.httpClient.post(this.resourceUrl,formData)
      .subscribe(
      (res)=>{console.log(res);}
    );
  }
}
