import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamaiItemComponent } from './damai-item.component';

describe('DamaiItemComponent', () => {
  let component: DamaiItemComponent;
  let fixture: ComponentFixture<DamaiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamaiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamaiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
