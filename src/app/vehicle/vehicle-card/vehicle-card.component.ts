import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.css',
})
export class VehicleCardComponent {
  vehicleTypes = [
    {
      Name: 'Maruti',
      Type: 'sedan',
      Year: 2020,
      nextservice: '2023-05-01',
      Next_Emi: '2023-06-01',
    },
    {
      Name: 'Hyundai',
      Type: 'hatchback',
      Year: 2021,
      nextservice: '2023-06-01',
      Next_Emi: '2023-07-01',
    },
    {
      Name: 'Honda',
      Type: 'SUV',
      Year: 2019,
      nextservice: '2023-04-01',
      Next_Emi: '2023-05-01',
    },
    {
      Name: 'Toyota',
      Type: 'sedan',
      Year: 2022,
      nextservice: '2023-07-01',
      Next_Emi: '2023-08-01',
    },
    {
      Name: 'Ford',
      Type: 'hatchback',
      Year: 2018,
      nextservice: '2023-03-01',
      Next_Emi: '2023-04-01',
    },
    {
      Name: 'Nissan',
      Type: 'SUV',
      Year: 2020,
      nextservice: '2023-05-15',
      Next_Emi: '2023-06-15',
    },
  ];
}
