import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BookselfComponent} from './bookself/bookself.component';
import {PagerService} from './services';

@NgModule({
  declarations: [
    AppComponent,
    BookselfComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
