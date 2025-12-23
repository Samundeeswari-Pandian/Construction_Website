import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LocationService } from '../../core/services/location.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent implements OnInit {

  contact = {
    name: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    message: ''
  };
  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];
  locations: any[] = [];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.getLocations().subscribe(data => {
      this.locations = data;
      this.countries = data;
    });
  }

 onCountryChange() {
  const country = this.locations.find(c => c.code === this.contact.country);
  this.states = country ? country.states : [];
  this.cities = [];
  this.contact.state = '';
  this.contact.city = '';
}

onStateChange() {
  const country = this.locations.find(c => c.code === this.contact.country);
  const state = country?.states.find((s: any) => s.code === this.contact.state);
  this.cities = state ? state.cities : [];
  this.contact.city = '';
}

  submitForm(form: NgForm): void {
    if (form.valid) {
      console.log(this.contact);
      alert('Thanks! Your message has been received.');
      form.resetForm();
      this.states = [];
      this.cities = [];
    }
  }
}
