import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{ value }}</div>
    <div>This is Janitha</div>`,
})
export class AppComponent {
  value = 'World';
}
