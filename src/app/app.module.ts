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
import {SearchService} from './services/search.service';
import {HttpModule} from '@angular/http';

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
    HttpModule,
    FormsModule
  ],
  providers: [PagerService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
