import { Component, OnInit } from "@angular/core";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  private heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  public ngOnInit(): void {
    this.heroService.getHeroes()
      .then((heroes) => this.heroes = heroes.slice(1, 5));
  }
}
