import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleErningsComponent } from './vehicle-earnings.component';

describe('VehicleErningsComponent', () => {
  let component: VehicleErningsComponent;
  let fixture: ComponentFixture<VehicleErningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleErningsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleErningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
