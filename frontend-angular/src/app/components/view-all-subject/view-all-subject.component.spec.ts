import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSubjectComponent } from './view-all-subject.component';

describe('ViewAllSubjectComponent', () => {
  let component: ViewAllSubjectComponent;
  let fixture: ComponentFixture<ViewAllSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllSubjectComponent]
    });
    fixture = TestBed.createComponent(ViewAllSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
