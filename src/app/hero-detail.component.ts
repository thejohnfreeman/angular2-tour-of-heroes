import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import "rxjs/add/operator/switchMap";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
  selector: "hero-detail",
  styleUrls: ["./hero-detail.component.css"],
  templateUrl: "./hero-detail.component.html",
})
export class HeroDetailComponent implements OnInit {
  private hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  public ngOnInit(): void {
    this.route.params
      // tslint:disable-next-line:no-string-literal
      .switchMap((params: Params) => this.heroService.getHero(+params["id"]))
      .subscribe((hero) => this.hero = hero);
  }

  private goBack(): void {
    this.location.back();
  }
}
