import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondaryPage } from './secondary.page';

describe('SecondaryPage', () => {
  let component: SecondaryPage;
  let fixture: ComponentFixture<SecondaryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SecondaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
