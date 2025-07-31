import { Component, signal } from '@angular/core';

@Component({
  selector: 'my-component',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-component-app');
}
