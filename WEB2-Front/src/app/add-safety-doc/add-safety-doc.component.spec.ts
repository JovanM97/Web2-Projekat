import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSafetyDocComponent } from './add-safety-doc.component';

describe('AddSafetyDocComponent', () => {
  let component: AddSafetyDocComponent;
  let fixture: ComponentFixture<AddSafetyDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSafetyDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSafetyDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
