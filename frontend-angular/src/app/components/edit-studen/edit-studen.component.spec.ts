import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudenComponent } from './edit-studen.component';

describe('EditStudenComponent', () => {
  let component: EditStudenComponent;
  let fixture: ComponentFixture<EditStudenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditStudenComponent]
    });
    fixture = TestBed.createComponent(EditStudenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
