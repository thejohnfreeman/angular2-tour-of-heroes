import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "./hero.service";
import { HeroesComponent } from "./heroes.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [HeroService],
})
export class AppModule {}
