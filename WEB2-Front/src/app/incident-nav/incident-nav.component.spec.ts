import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentNavComponent } from './incident-nav.component';

describe('IncidentNavComponent', () => {
  let component: IncidentNavComponent;
  let fixture: ComponentFixture<IncidentNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
