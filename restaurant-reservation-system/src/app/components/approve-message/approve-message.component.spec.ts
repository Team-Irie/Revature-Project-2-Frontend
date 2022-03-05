import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveMessageComponent } from './approve-message.component';

describe('ApproveMessageComponent', () => {
  let component: ApproveMessageComponent;
  let fixture: ComponentFixture<ApproveMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
