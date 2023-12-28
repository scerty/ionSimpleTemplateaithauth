import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class CoreService {
 

  url = environment.api;

  constructor(private http: HttpClient, private router: Router) {
   
  }

  testorder(order:{automat_id:any,}) {
    return this.http.post(`${this.url}/core/testorder`,order, {withCredentials: true}).subscribe(
      () => {
       console.log(order.automat_id);
       
      },
      error => {
        console.error('Error during logout:', error);
        // Handle errors or perform additional actions as needed
      }
    );
    
  }



}