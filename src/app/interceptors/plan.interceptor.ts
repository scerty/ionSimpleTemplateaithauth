import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PalnsmanagmentService } from '../services/secondary/palnsmanagment.service';

@Injectable()
export class PlanInterceptor implements HttpInterceptor {

  constructor(private plansService: PalnsmanagmentService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request is for creating an order
    if (this.isOrderCreationRequest(request)) {
      // Check if the user has an active plan
      return this.plansService.checkActivePlan().pipe(
        mergeMap((response) => {
          // Assuming the response contains information about the active plan
          if (response.active) {
            // If the user has an active plan, proceed with the original request
            return next.handle(request) as Observable<HttpEvent<any>>;
          } else {
            // If the user doesn't have an active plan, redirect to the payment page
            console.log('User does not have an active plan. Redirecting to payment page.');
            console.log('====================');
            
            this.router.navigate(['/secure/secondary/plan']); 
            // Returning an observable to satisfy the HttpInterceptor contract
            return new Observable<HttpEvent<any>>();  
          }
        }),
      );
    } else {
      // If it's not an order creation request, proceed with the original request
      return next.handle(request) as Observable<HttpEvent<any>>;
    }
  }

  private isOrderCreationRequest(request: HttpRequest<any>): boolean {
    // Adjust the condition based on the actual endpoint or criteria for order creation
    
    return request.method === 'POST' && request.url.includes('/core/testorder');
   
    
  }
}
