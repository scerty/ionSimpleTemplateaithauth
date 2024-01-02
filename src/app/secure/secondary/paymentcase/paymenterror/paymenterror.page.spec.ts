import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymenterrorPage } from './paymenterror.page';

describe('PaymenterrorPage', () => {
  let component: PaymenterrorPage;
  let fixture: ComponentFixture<PaymenterrorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaymenterrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
