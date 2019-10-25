import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../shared/models/book';

import { Store } from '@ngrx/store';
import { GetBooks, ClearBook, SetPage } from '../../redux/actions';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss']
})
export class SearchBooksComponent implements OnInit {

  nameBook: String;
  loading: boolean = false;

  constructor(
    private router: Router,
    private booksService: BooksService,
    private store: Store<{ books: Book[] }>) { }

  ngOnInit() {
  }

  onSubmit(){
    this.store.dispatch(new ClearBook()); 
    this.store.dispatch(new SetPage(1)); 
    this.loading = true;
    this.booksService.getBooks(this.nameBook).subscribe(books => {
      this.store.dispatch(new GetBooks(books)); 
      this.router.navigate(['/books'])
      this.loading = false;
    })
  }
}
