import { Component } from "@angular/core";

@Component({
  selector: "app-element",
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
    `,
})
export class AppComponent {
  private title = "Tour of Heroes";
}
