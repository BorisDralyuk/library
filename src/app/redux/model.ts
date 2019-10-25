import { Book } from '../shared/models/book';

export class Library {
	books: Book[];
	wishlist: Book[];
	page: number;
}