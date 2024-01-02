import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutlocalstateService {

  private selectedPlanSource = new BehaviorSubject<string>(''); // Default value is an empty string
  selectedPlan$ = this.selectedPlanSource.asObservable();

  setSelectedPlan(plan: string) {
    this.selectedPlanSource.next(plan);
  }
}