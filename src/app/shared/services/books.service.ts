import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Book } from '../models/book';

@Injectable()
export class BooksService {

	constructor(private http: HttpClient) {
	}

	getBooks(param: String) {
		if(param === '') param = undefined;
		
		return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${param}&maxResults=20`)
			.pipe(
				map(d => {
					return this.transformBookData(d['items'])
				})
			) ;
	}

	private transformBookData(data: Array<any>): Array<Book> {
		const res = [];
		data.forEach(element => {
			const { authors, title, infoLink, language, publisher, previewLink, description, pageCount, categories } = element['volumeInfo'];
			const { smallThumbnail } = element['volumeInfo']['imageLinks'];
			const { id } = element;
			res.push({ id, authors, title, language, publisher, description, pageCount, categories, imageLink: smallThumbnail, infoLink, previewLink, selected: false })
	
		});
		return res || [];
	}
}