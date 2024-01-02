import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PalnsmanagmentService {
  url = environment.api + '/secondary';

  constructor(private http: HttpClient, private router: Router) { }

  createplan(plan: { plan_type: any }) {
    return this.http.post(`${this.url}/create/`, plan, { withCredentials: true }).subscribe(
      () => {
        console.log(plan.plan_type);
        this.router.navigate(['/secure/pimary']);
      },
      error => {
        console.error('Error during createplan:', error);
        // Handle errors or perform additional actions as needed
      }
    );
  }

  checkActivePlan(): Observable<any> {
    return this.http.get(`${this.url}/checkActivePlan`, { withCredentials: true });
  }
}
