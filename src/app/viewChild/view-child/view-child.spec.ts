import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildCompnent } from './view-child';

describe('ViewChildCompnent', () => {
  let component: ViewChildCompnent;
  let fixture: ComponentFixture<ViewChildCompnent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildCompnent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildCompnent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
