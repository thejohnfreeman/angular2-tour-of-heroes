import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
// tslint:disable-next-line:ordered-imports
import "rxjs/add/operator/map";

import { Hero } from "./hero";

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}

  public search(term: string): Observable<Hero[]> {
    return this.http
      .get(`app/heroes/?name=${term}`)
      .map((response) => response.json().data as Hero[]);
  }
}
