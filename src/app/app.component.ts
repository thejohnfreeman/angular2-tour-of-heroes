import { Component } from "@angular/core";

@Component({
  selector: "app-element",
  template: `
    <h1>{{title}}</h1>
    <heroes></heroes>
    `,
})
export class AppComponent {
  private title = "Tour of Heroes";
}
