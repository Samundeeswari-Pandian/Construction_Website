import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  
  activePanel: 'login' | 'signup' = 'login'; // default active

  username = '';
  password = '';
  rememberMe = false;
  errorMessage = '';
  isLoading = false; // ✅ ADD THIS
  showPassword = false;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    this.loadRememberedUser();
  }

  /* -----------------------------
   * Load Remembered Username
   * ----------------------------- */
  loadRememberedUser(): void {
    if (isPlatformBrowser(this.platformId)) {
      const rememberedUser = localStorage.getItem('rememberedUser');
      const rememberedPassword = localStorage.getItem('rememberedPassword');

      if (rememberedUser) {
        this.username = rememberedUser;
        this.rememberMe = true;
      }

      if (rememberedPassword) {
        this.password = rememberedPassword;
      }
    }
  }


  /* -----------------------------
   * Login Action
   * ----------------------------- */
  login(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.errorMessage = '';
    this.isLoading = true;

    if (!this.isValidLogin()) {
      this.errorMessage = 'Invalid username or password';
      this.password = '';
      this.isLoading = false;
      return;
    }

    this.handleRememberMe();
    this.storeToken();

    this.isLoading = false;
    this.router.navigate(['/home']);
  }

  /* -----------------------------
   * Validation Logic
   * ----------------------------- */
  private isValidLogin(): boolean {
    return this.username === 'admin' && this.password === 'password123';
  }

  /* -----------------------------
   * Remember Me Logic
   * ----------------------------- */
  private handleRememberMe(): void {
    if (this.rememberMe) {
      localStorage.setItem('rememberedUser', this.username);
      localStorage.setItem('rememberedPassword', this.password);
    } else {
      localStorage.removeItem('rememberedUser');
      localStorage.removeItem('rememberedPassword');
    }
  }

  /* -----------------------------
   * Token Storage (Dummy)
   * ----------------------------- */
  private storeToken(): void {
    localStorage.setItem('token', 'dummy-token');
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  setActive(panel: 'login' | 'signup') {
    this.activePanel = panel;
  }

}
