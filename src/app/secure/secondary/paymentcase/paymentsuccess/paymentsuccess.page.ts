import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from 'src/app/services/secondary/checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.page.html',
  styleUrls: ['./paymentsuccess.page.scss'],
})
export class PaymentsuccessPage implements OnInit {

  constructor(
    private checkoutService:CheckoutService,
    private route:ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    const source = this.route.snapshot.queryParams['source'];

    this.checkoutService.confirm({source})
      .subscribe(res => console.log(res));
  }

  useService(){
    this.router.navigate(['/secure/pimary/core'])
  }

}