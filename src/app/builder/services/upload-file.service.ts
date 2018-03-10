import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as requestConstant from './server-configuration';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UploadFileService {

  constructor(private http: Http) { }

  public uploadFiles(formData: FormData) {
    return this.http.post(`${requestConstant.defaultUrl}/uploadImages?user=${localStorage.getItem('user')}`,
      formData).subscribe(data => console.log(data));
  }
}
