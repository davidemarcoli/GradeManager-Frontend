import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeAverageChartComponent } from './theme-average-chart.component';

describe('PieChartComponent', () => {
  let component: ThemeAverageChartComponent;
  let fixture: ComponentFixture<ThemeAverageChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeAverageChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeAverageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
