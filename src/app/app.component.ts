// tslint:disable:max-classes-per-file

import { Component } from "@angular/core";

export class Hero {
  public id: number;
  public name: string;
}

@Component({
  selector: "app-element",
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input value="{{hero.name}}" placeholder="name">
    </div>
    `,
})
export class AppComponent {
  public title = "Tour of Heroes";
  public hero: Hero = {
    id: 1,
    name: "Windstorm",
  };
}
