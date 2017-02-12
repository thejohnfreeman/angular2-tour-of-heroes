import { Component } from '@angular/core';

@Component({
  selector: 'app-element',
  template: `<h1>Hello {{name}}!</h1>`
})
export class AppComponent {
  name = 'World';
}
