import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamaiListComponent } from './damai-list.component';

describe('DamaiListComponent', () => {
  let component: DamaiListComponent;
  let fixture: ComponentFixture<DamaiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamaiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamaiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
