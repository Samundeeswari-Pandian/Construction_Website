import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractivePanel } from './interactive-panel';

describe('InteractivePanel', () => {
  let component: InteractivePanel;
  let fixture: ComponentFixture<InteractivePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractivePanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractivePanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
