import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/models/book';
import { select, Store } from '@ngrx/store';
import { RemoveFromWishlist } from '../../redux/actions';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  books: Book[]; 

  constructor(private store: Store<{ books: Book[] }>) { }

  ngOnInit() {
    this.store.pipe(select('library')).subscribe(data => this.books = data.wishlist);
  }

  removeBook(e, book) {
    e.preventDefault();
    this.store.dispatch(new RemoveFromWishlist(book.id));
  }

}
