import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BookselfComponent} from './bookself/bookself.component';
import {PagerService} from './services';
import {SearchFilter} from 'ng4-pipes/src/app/pipes/searchFilter';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookselfComponent,
    HeaderComponent,
    FooterComponent,
    SearchFilter,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
