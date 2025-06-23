import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  employees = [
    {
      Name: 'John Doe',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqjgw1zkAbN4v2qumZJ8R9aIBn1XZQ0enOQ&s',
      Position: 'Software Engineer',
      age: 30,
      contact: '123-456-7890',
      address: '123 Main St, City, Country',
      salary: 60000,
      licence: 'MVC',
    },
    {
      Name: 'John Doe',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqjgw1zkAbN4v2qumZJ8R9aIBn1XZQ0enOQ&s',
      Position: 'Software Engineer',
      age: 30,
      contact: '123-456-7890',
      address: '123 Main St, City, Country',
      salary: 60000,
      licence: 'MVC',
    },
    {
      Name: 'John Doe',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqjgw1zkAbN4v2qumZJ8R9aIBn1XZQ0enOQ&s',
      Position: 'Software Engineer',
      age: 30,
      contact: '123-456-7890',
      address: '123 Main St, City, Country',
      salary: 60000,
      licence: 'MVC',
    },
    {
      Name: 'John Doe',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqjgw1zkAbN4v2qumZJ8R9aIBn1XZQ0enOQ&s',
      Position: 'Software Engineer',
      age: 30,
      contact: '123-456-7890',
      address: '123 Main St, City, Country',
      salary: 60000,
      licence: 'MVC',
    },
    {
      Name: 'John Doe',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqjgw1zkAbN4v2qumZJ8R9aIBn1XZQ0enOQ&s',
      Position: 'Software Engineer',
      age: 30,
      contact: '123-456-7890',
      address: '123 Main St, City, Country',
      salary: 60000,
      licence: 'MVC',
    },
    {
      Name: 'John Doe',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqjgw1zkAbN4v2qumZJ8R9aIBn1XZQ0enOQ&s',
      Position: 'Software Engineer',
      age: 30,
      contact: '123-456-7890',
      address: '123 Main St, City, Country',
      salary: 60000,
      licence: 'MVC',
    },
  ];
}
