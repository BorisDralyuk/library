import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { AuthGuard } from './shared/services/auth-guard.service';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuard] },
  { path: 'books', component: ListBooksComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
