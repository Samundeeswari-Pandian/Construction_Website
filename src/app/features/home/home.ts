import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent {
  companyName = 'Elite Construction Solutions';
  services = [
    { title: 'Residential Construction', description: 'Custom homes and renovations' },
    { title: 'Commercial Projects', description: 'Office buildings and retail spaces' },
    { title: 'Industrial Construction', description: 'Warehouses and manufacturing facilities' }
  ];

  constructor(private router: Router) { }

  logout() {
    // localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
