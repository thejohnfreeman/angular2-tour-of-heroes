import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

import { Hero } from "./hero";
import { HeroSearchService } from "./hero-search.service";

@Component({
  providers: [HeroSearchService],
  selector: "hero-search",
  styleUrls: ["./hero-search.component.css"],
  templateUrl: "./hero-search.component.html",
})
export class HeroSearchComponent implements OnInit {
  private heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router) {}

  public search(term: string): void {
    this.searchTerms.next(term);
  }

  public ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term) => term
        ? this.heroSearchService.search(term)
        : Observable.of<Hero[]>([]))
      .catch((error) => {
        // tslint:disable-next-line:no-console
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  public gotoDetail(hero: Hero): void {
    let link = ["/detail", hero.id];
    this.router.navigate(link);
  }
}
