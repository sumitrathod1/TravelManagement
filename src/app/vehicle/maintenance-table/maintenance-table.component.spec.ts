import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceTableComponent } from './maintenance-table.component';

describe('MaintenanceTableComponent', () => {
  let component: MaintenanceTableComponent;
  let fixture: ComponentFixture<MaintenanceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
