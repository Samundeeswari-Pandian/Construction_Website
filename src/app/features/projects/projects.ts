import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})

export class ProjectsComponent {
 projects = [
    {
      id: 'riverside-residence',
      title: 'Riverside Residence',
      location: 'Springfield',
      img: 'assets/images/image1.jpg',
      description: 'Custom home build with modern finishes.'
    },
    {
      id: 'downtown-offices',
      title: 'Downtown Offices',
      location: 'Metro City',
      img: 'assets/images/image2.jpg',
      description: 'Five-storey commercial office development.'
    },
    {
      id: 'westside-warehouse',
      title: 'Westside Warehouse',
      location: 'Lakeside',
      img: 'assets/images/image3.jpg',
      description: 'Industrial storage facility with loading docks.'
    }
  ];
}
