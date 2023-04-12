import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReservationPageComponent } from './update-reservation-page.component';

describe('UpdateReservationPageComponent', () => {
  let component: UpdateReservationPageComponent;
  let fixture: ComponentFixture<UpdateReservationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReservationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReservationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
