import { Component } from "@angular/core";

@Component({
  selector: "app-element",
  template: "<h1>{{title}}</h1><h2>{{hero}} details!</h2>",
})
export class AppComponent {
  public title = "Tour of Heroes";
  public hero = "Windstorm";
}
