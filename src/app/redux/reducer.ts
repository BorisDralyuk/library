import { ActionEx, LibraryActionTypes } from './actions';
import { Book } from '../shared/models/book';
import { Library } from './model';


export const initialState = {
	books: [],
	wishlist: [],
	page: 1
};

export function LibraryReducer(state = initialState, action: ActionEx) {
	switch (action.type) {
		case LibraryActionTypes.GET_BOOKS: {
			return {...state, books: [...action.payload]};
		}
		case LibraryActionTypes.ADD_TO_WISHLIST: {
			const st = {...state};
			st.wishlist.push(action.payload)
			return {...st};
		}

		case LibraryActionTypes.REMOVE_FROM_WISHLIST: {
			let st = { ...state };
			st.wishlist = st.wishlist.filter(m => m.id !== action.payload);
			return { ...st };
		}

		case LibraryActionTypes.SET_PAGE: {
			return { ...state, page: action.payload };
		}

		case LibraryActionTypes.CLEAR_BOOK: {
			let st = { ...state };
			st.books = [];
			return { ...st };
		}

		case LibraryActionTypes.CLEAR: {
			let st = { ...state };
			st.books = [];
			st.wishlist = [];
			return { ...st };
		}
		default:
			return state;
	}
}