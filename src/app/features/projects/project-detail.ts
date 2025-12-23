import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.scss'],
})
export class ProjectDetailComponent {

  project: any;

  private projects = [
    {
      id: 'riverside-residence',
      title: 'Riverside Residence',
      location: 'Springfield',
      img: '../../assets/images/hero-bg1.jpg',
      description: 'Custom home build with modern finishes.'
    },
    {
      id: 'downtown-offices',
      title: 'Downtown Offices',
      location: 'Metro City',
      img: '../../assets/images/hero-bg2.jpg',
      description: 'Five-storey commercial office development.'
    },
    {
      id: 'westside-warehouse',
      title: 'Westside Warehouse',
      location: 'Lakeside',
      img: '../../assets/images/hero-bg4.jpg',
      description: 'Industrial storage facility with loading docks.'
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.project = this.projects.find(p => p.id === id);
    });
  }
}
