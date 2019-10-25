import { Action } from '@ngrx/store';
import { Book } from '../shared/models/book';

export enum LibraryActionTypes {
	GET_BOOKS = 'GET_BOOKS',
	ADD_TO_WISHLIST = 'ADD_TO_WISHLIST',
	REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST',
	SET_PAGE = 'SET_PAGE',
	CLEAR_BOOK = 'CLEAR_BOOK',
	CLEAR = 'CLEAR'
}
export class ActionEx implements Action {
	readonly type;
	payload: any;
}

export class ActionN implements Action {
	readonly type;
}
export class GetBooks implements ActionEx {
	readonly type = LibraryActionTypes.GET_BOOKS;
	constructor(public payload: Book[]) {
	}
}

export class AddToWishlist implements ActionEx {
	readonly type = LibraryActionTypes.ADD_TO_WISHLIST;
	constructor(public payload: Book) {
	}
}

export class RemoveFromWishlist implements ActionEx {
	readonly type = LibraryActionTypes.REMOVE_FROM_WISHLIST;
	constructor(public payload: string) {
	}
}

export class SetPage implements ActionEx {
	readonly type = LibraryActionTypes.SET_PAGE;
	constructor(public payload: number) {
	}
}


export class ClearBook implements ActionN {
	readonly type = LibraryActionTypes.CLEAR_BOOK;
	constructor() {
	}
}

export class ClearState implements ActionN {
	readonly type = LibraryActionTypes.CLEAR;
	constructor() {
	}
}
