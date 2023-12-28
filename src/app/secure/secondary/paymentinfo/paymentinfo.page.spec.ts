import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentinfoPage } from './paymentinfo.page';

describe('PaymentinfoPage', () => {
  let component: PaymentinfoPage;
  let fixture: ComponentFixture<PaymentinfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaymentinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
