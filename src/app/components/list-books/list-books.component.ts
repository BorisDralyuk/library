import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Book } from '../../shared/models/book';
import { AddToWishlist, SetPage } from '../../redux/actions';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit   {

  detailB: Book;
  books: Book[] = [];
  wishlist: Book[]; 
  activePage: number;
  //showPages: boolean = false;
;
  

  constructor(private store: Store<{ books: Book[] }>) {
  }

  ngOnInit() {
    this.store.pipe(select('library')).subscribe(data =>
      { 
        this.books = data.books;
        this.wishlist = data.wishlist;
        this.activePage = data.page;
        // if(this.books.length > 10){
        //   this.showPages = true;
        // }
      }); 
  }

  addBook(e, book: Book) {
    e.preventDefault();
    this.store.dispatch(new AddToWishlist(book));
  }

  bookSelected(book) {
    return this.wishlist.filter(f => f.id === book.id).length > 0;
  }

  detailBook(book) {
    this.detailB = book;
  }

  setPage(p){
    this.store.dispatch(new SetPage(+p)); 
  }

  getBooks() {
    if (this.activePage === 1)
      return this.books.slice(0, 10);
    if (this.activePage === 2)
      return this.books.slice(10, 20);
  }

}
