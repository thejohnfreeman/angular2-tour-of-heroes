import { Injectable } from "@angular/core";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable()
export class HeroService {
  public getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then((heroes) => heroes.find((hero) => hero.id === id));
  }

  public getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  public getHeroesSlowly(): Promise<Hero[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
