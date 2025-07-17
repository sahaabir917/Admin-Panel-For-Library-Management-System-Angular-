import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcomponetComponent } from './dashboardcomponet.component';

describe('DashboardcomponetComponent', () => {
  let component: DashboardcomponetComponent;
  let fixture: ComponentFixture<DashboardcomponetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardcomponetComponent]
    });
    fixture = TestBed.createComponent(DashboardcomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
