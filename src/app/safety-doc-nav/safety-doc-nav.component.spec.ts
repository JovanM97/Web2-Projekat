import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyDocNavComponent } from './safety-doc-nav.component';

describe('SafetyDocNavComponent', () => {
  let component: SafetyDocNavComponent;
  let fixture: ComponentFixture<SafetyDocNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyDocNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyDocNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
