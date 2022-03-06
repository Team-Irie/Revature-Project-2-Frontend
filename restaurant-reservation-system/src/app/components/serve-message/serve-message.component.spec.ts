import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeMessageComponent } from './serve-message.component';

describe('ServeMessageComponent', () => {
  let component: ServeMessageComponent;
  let fixture: ComponentFixture<ServeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
