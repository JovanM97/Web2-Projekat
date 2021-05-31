import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncAddCallsComponent } from './inc-add-calls.component';

describe('IncAddCallsComponent', () => {
  let component: IncAddCallsComponent;
  let fixture: ComponentFixture<IncAddCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncAddCallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncAddCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
