import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGradesGridComponent } from './list-grades-grid.component';

describe('ListGradesGridComponent', () => {
  let component: ListGradesGridComponent;
  let fixture: ComponentFixture<ListGradesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGradesGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGradesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
