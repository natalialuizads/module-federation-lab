import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { logger } from '@module-federation-lab/logger';
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
})
export class ExampleComponent {

  teste(){
    logger.debug('teste footer')
  }
}
