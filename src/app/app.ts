import { Component, signal } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common'; // 👈 ADD THIS
import { HeaderComponent } from './shared/components/header/header';
import { FooterComponent } from './shared/components/footer/footer';
import { InteractivePanel } from './shared/components/interactive-panel/interactive-panel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,      // 👈 REQUIRED for *ngIf
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    InteractivePanel
  ],
  templateUrl: './app.shell.html',
  styleUrls: ['./app.scss']
})
export class App {
  hideLayout = signal(false);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let route = this.router.routerState.snapshot.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        this.hideLayout.set(!!route.data?.['hideLayout']);
      });
  }

  scrollUp() {
    const container = document.querySelector('.app-main');
    container?.scrollBy({ top: -200, behavior: 'smooth' });
  }

  scrollDown() {
    const container = document.querySelector('.app-main');
    container?.scrollBy({ top: 200, behavior: 'smooth' });
  }
}
