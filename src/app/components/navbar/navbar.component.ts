import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Book } from '../../shared/models/book';
import { select, Store } from '@ngrx/store';
import { ClearState } from '../../redux/actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  wishlist: Book[]; 

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<{ books: Book[] }>) { }

  ngOnInit() {

    this.store.pipe(select('library')).subscribe(data => this.wishlist = data.wishlist);
  }

  onLogOut() {
    this.store.dispatch(new ClearState()); 
    this.authService.logOut();
    this.router.navigate(['/'])
  }


}
