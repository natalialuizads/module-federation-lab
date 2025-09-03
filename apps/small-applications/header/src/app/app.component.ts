import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';

@Component({
  standalone: true,
  imports: [RouterModule, ExampleComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'header';
}
