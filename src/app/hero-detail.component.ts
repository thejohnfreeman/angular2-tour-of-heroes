import { Location } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import "rxjs/add/operator/switchMap";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
  selector: "hero-detail",
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
      <button (click)="goBack()">Back</button>
    </div>
  `,
})
export class HeroDetailComponent implements OnInit {
  @Input()
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
