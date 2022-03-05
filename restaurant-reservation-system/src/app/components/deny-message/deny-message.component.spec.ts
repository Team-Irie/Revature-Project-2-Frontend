import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenyMessageComponent } from './deny-message.component';

describe('DenyMessageComponent', () => {
  let component: DenyMessageComponent;
  let fixture: ComponentFixture<DenyMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenyMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
