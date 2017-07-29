import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditComponent } from './student-edit.component';

describe('DamaiEditComponent', () => {
  let component: DamaiEditComponent;
  let fixture: ComponentFixture<DamaiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamaiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamaiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
