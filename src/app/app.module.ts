import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { GameControllerComponent } from "./game-controller/game-controller.component";
import { ArrowComponent } from './arrow/arrow.component';

@NgModule({
  declarations: [AppComponent, GameControllerComponent, ArrowComponent],
  imports: [BrowserModule, HttpClientModule, HttpClientJsonpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
