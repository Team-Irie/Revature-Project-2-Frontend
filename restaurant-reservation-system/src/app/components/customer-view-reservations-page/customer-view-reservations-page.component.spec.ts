import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewReservationsPageComponent } from './customer-view-reservations-page.component';

describe('CustomerViewReservationsPageComponent', () => {
  let component: CustomerViewReservationsPageComponent;
  let fixture: ComponentFixture<CustomerViewReservationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewReservationsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewReservationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
