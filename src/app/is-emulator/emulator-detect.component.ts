import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-emulator',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './emulator-detect.component.html'
})
export class EmulatorComponent implements OnInit {

  title = 'fraud_detection';
  isEmulator: boolean | undefined;
  ngOnInit(): void {
    this.isEmulator = /emulator|fake/i.test(navigator.userAgent);

  }
}
