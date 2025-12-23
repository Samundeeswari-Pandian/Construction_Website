import { Component } from '@angular/core';

@Component({
  selector: 'app-interactive-panel',
  imports: [],
  templateUrl: './interactive-panel.html',
  styleUrl: './interactive-panel.scss',
})
export class InteractivePanel {

  // Scroll up by 200px smoothly
  scrollUp() {
    window.scrollBy({ top: -200, behavior: 'smooth' });
  }

  // Scroll down by 200px smoothly
  scrollDown() {
    window.scrollBy({ top: 200, behavior: 'smooth' });
  }

}
