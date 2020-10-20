import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";
import { HighlightDirective } from './highlight.directive';
import { ZzmmPipe } from './zzmm.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ZzmmPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzButtonModule,
    NzInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
