import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewReservationsPageComponent } from './manager-view-reservations-page.component';

describe('ManagerViewReservationsPageComponent', () => {
  let component: ManagerViewReservationsPageComponent;
  let fixture: ComponentFixture<ManagerViewReservationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerViewReservationsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerViewReservationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
