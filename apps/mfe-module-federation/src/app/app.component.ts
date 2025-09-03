import { Component } from '@angular/core';
import { ExampleComponent } from './example/example.component';

@Component({
  standalone: true,
  imports: [ExampleComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mfe-module-federation';
}
