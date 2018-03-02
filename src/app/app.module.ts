import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CurrentQuestion } from './filter/filter.pipe';//new
import { FormsModule } from '@angular/forms';//new
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentQuestion
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
