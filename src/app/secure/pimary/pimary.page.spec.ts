import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PimaryPage } from './pimary.page';

describe('PimaryPage', () => {
  let component: PimaryPage;
  let fixture: ComponentFixture<PimaryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PimaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
