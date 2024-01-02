import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor(private http: HttpClient) {
  }

  create(data: any): Observable<any> {
    return this.http.post(`${environment.api}/checkout/order`, data,{withCredentials:true});
  }

  confirm(data: any): Observable<any> {
    return this.http.post(`${environment.api}/checkout/order/confirm`, data);
  }
}