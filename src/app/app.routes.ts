import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () => import('./features/login/login').then(m => m.Login),
    data: { hideLayout: true }
  },

  { path: 'home', loadComponent: () => import('./features/home/home').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./features/about/about').then(m => m.AboutComponent) },
  { path: 'services', loadComponent: () => import('./features/services/services').then(m => m.ServicesComponent) },
  { path: 'projects', loadComponent: () => import('./features/projects/projects').then(m => m.ProjectsComponent) },
  { path: 'projects/:id', loadComponent: () => import('./features/projects/project-detail').then(m => m.ProjectDetailComponent) },
  { path: 'contact', loadComponent: () => import('./features/contact/contact').then(m => m.ContactComponent) },
];

