import { HelloWorldComponent } from './hello-world-component/hello-world-component';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-hello-world');
}
