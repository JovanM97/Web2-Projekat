import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyDocChecklistComponent } from './safety-doc-checklist.component';

describe('SafetyDocChecklistComponent', () => {
  let component: SafetyDocChecklistComponent;
  let fixture: ComponentFixture<SafetyDocChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyDocChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyDocChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
