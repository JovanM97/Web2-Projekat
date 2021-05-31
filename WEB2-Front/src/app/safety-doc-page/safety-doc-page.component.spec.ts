import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyDocPageComponent } from './safety-doc-page.component';

describe('SafetyDocPageComponent', () => {
  let component: SafetyDocPageComponent;
  let fixture: ComponentFixture<SafetyDocPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyDocPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyDocPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
