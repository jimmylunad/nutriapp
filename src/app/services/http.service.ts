import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHttpCustomResponse } from 'src/app/interfaces/ihttp'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private options = {
    headers: new HttpHeaders()
  }

  constructor(private http: HttpClient) {
    this.initHeaders();
  }

  initHeaders() {
    this.options = {
      headers: new HttpHeaders()
                    .set('Content-Type', 'application/json')
    }
  }

  get<T>(url, options?: {headers?}): Observable<IHttpCustomResponse<T>> {
    this.initHeaders();
    const _options = options ? options : this.options;
    return this.http.get<IHttpCustomResponse<T>>(url, _options)
  }

  post<T>(url, data, options?: {headers?}): Observable<IHttpCustomResponse<T>> {
    this.initHeaders();
    const _options = options ? options : this.options;
    return this.http.post<IHttpCustomResponse<T>>(url, data, _options)
  }

  put<T>(url, data, options?: {headers?}) {
    this.initHeaders();
    const _options = options ? options : this.options;
    return this.http.put<IHttpCustomResponse<T>>(url, data, _options)
  }

  delete<T>(url, options?: {headers?}) {
    this.initHeaders();
    const _options = options ? options : this.options;
    return this.http.delete<IHttpCustomResponse<T>>(url, _options)
  }
}
