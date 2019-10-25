import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SearchBooksComponent } from './components/search-books/search-books.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { AuthComponent } from './components/auth/auth.component';

import { AuthGuard } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { BooksService } from './shared/services/books.service';

import { StoreModule } from '@ngrx/store';
import { LibraryReducer } from './redux/reducer';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SearchBooksComponent,
    NavbarComponent,
    WishlistComponent,
    ListBooksComponent,
    DetailBookComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    StoreModule.forRoot({ library: LibraryReducer }) 
  ],
  providers: [AuthService, AuthGuard, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
