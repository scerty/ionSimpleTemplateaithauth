import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckoutlocalstateService } from 'src/app/services/secondary/localstate/checkoutlocalstate.service';
import { PalnsmanagmentService } from 'src/app/services/secondary/palnsmanagment.service';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {
  plan!: FormGroup;

  constructor(
    private planService: PalnsmanagmentService,
    private checkoutlocalstatService:CheckoutlocalstateService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
      this.plan = this.formBuilder.group({
      plan_type: ['', Validators.required],
      
    });
  }


  submitForm() {
    //this.planService.createplan(this.plan.value);
    // Ensure this.plan is not null before accessing its properties
    if (this.plan) {
      const planTypeControl = this.plan.get('plan_type');
  
      // Ensure planTypeControl is not null before accessing its value
      if (planTypeControl) {
        const selectedPlan = planTypeControl.value;
      
        // Use the selectedPlan value as needed
        this.checkoutlocalstatService.setSelectedPlan(selectedPlan);
        console.log(selectedPlan);
        this.router.navigate(['/secure/secondary/paymentform']);

      }
    }
   }

}
