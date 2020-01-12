import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IHttpCustomResponse } from 'src/app/interfaces/ihttp';
import { HttpService } from 'src/app/services/http.service';
import { ISignIn } from 'src/app/interfaces/ilogin'

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  baseUrl: string = environment.api.baseUrl;

  constructor(private httpService: HttpService) {}

  postSignIn(data): Observable<IHttpCustomResponse<ISignIn>> {
    const uri = `${this.baseUrl}/service/v1/user/sign_in`;
    return this.httpService.post<ISignIn>(uri, data);
  }
  
}
