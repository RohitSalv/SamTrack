import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudenComponent } from './add-studen.component';

describe('AddStudenComponent', () => {
  let component: AddStudenComponent;
  let fixture: ComponentFixture<AddStudenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStudenComponent]
    });
    fixture = TestBed.createComponent(AddStudenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
