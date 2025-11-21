import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallAPI } from './call-api';

describe('CallAPI', () => {
  let component: CallAPI;
  let fixture: ComponentFixture<CallAPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallAPI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallAPI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
