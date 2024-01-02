import { Component, OnInit } from '@angular/core';
import { CheckoutlocalstateService } from 'src/app/services/secondary/localstate/checkoutlocalstate.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CheckoutService } from 'src/app/services/secondary/checkout.service';
declare var Stripe: (arg0: string) => any;
@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.page.html',
  styleUrls: ['./paymentform.page.scss'],
})
export class PaymentformPage implements OnInit {
  selectedPlan!: string;
  form!: FormGroup;
  stripe: any;

  constructor(
    private checkoutlocalsratService :CheckoutlocalstateService,
    private checkoutService :CheckoutService,
   
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stripe = Stripe(environment.stripe_key);
    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
      address: '',
      country: '',
      city: '',
      zip: '',
    });



    this.checkoutlocalsratService.selectedPlan$.subscribe((plan) => {
      this.selectedPlan = plan;
    });
  }





  submit(): void {
    
    const data = {
      plan:this.selectedPlan,
      ...this.form.getRawValue()
    };

    this.checkoutService.create(data).subscribe(
      res => {
        this.stripe.redirectToCheckout({
          sessionId: res.id
        });
      }
    );
  }

}