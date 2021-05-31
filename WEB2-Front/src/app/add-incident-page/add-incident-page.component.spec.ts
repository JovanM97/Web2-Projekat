import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIncidentPageComponent } from './add-incident-page.component';

describe('AddIncidentPageComponent', () => {
  let component: AddIncidentPageComponent;
  let fixture: ComponentFixture<AddIncidentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIncidentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIncidentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
