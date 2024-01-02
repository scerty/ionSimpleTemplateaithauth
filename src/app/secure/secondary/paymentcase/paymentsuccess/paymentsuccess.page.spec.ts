import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentsuccessPage } from './paymentsuccess.page';

describe('PaymentsuccessPage', () => {
  let component: PaymentsuccessPage;
  let fixture: ComponentFixture<PaymentsuccessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaymentsuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
