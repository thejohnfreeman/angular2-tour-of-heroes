import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeroDetailComponent } from "./hero-detail.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HeroDetailComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
