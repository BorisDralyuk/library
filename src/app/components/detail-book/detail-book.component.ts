import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {

  @Input() book: Book;
  
  constructor() { }

  ngOnInit() {
  }

}
