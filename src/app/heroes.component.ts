import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
  selector: "heroes",
  styleUrls: ["./heroes.component.css"],
  templateUrl: "./heroes.component.html",
})
export class HeroesComponent implements OnInit {
  private heroes: Hero[];
  private selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService,
  ) {}

  public ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes(): void {
    this.heroService.getHeroes().then((heroes) => this.heroes = heroes);
  }

  private onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  private gotoDetail(): void {
    this.router.navigate(["/detail", this.selectedHero.id]);
  }
}
