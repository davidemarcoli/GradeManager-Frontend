import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGoalsAdvancedComponent } from './list-goals-advanced.component';

describe('ListGoalsComponent', () => {
  let component: ListGoalsAdvancedComponent;
  let fixture: ComponentFixture<ListGoalsAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGoalsAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGoalsAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
