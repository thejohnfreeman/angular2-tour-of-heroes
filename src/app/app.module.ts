import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "./hero.service";
import { HeroesComponent } from "./heroes.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        pathMatch: "full",
        redirectTo: "/dashboard",
      },
      {
        component: DashboardComponent,
        path: "dashboard",
      },
      {
        component: HeroDetailComponent,
        path: "detail/:id",
      },
      {
        component: HeroesComponent,
        path: "heroes",
      },
    ]),
  ],
  providers: [HeroService],
})
export class AppModule {}
