import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
	private _userName: string;
	private _isLoggedIn: boolean;

	constructor() {
		this._isLoggedIn = false;
		this._userName = '';
	}

	isLoggedIn() {
		return this._isLoggedIn;
	}

	logIn() {
		this._isLoggedIn = true;
	}

	logOut() {
		this._isLoggedIn = false;
	}

	setUserName(name: string) {
		this._userName = name;
	}

	getUserName(): string {
		return this._userName;
	}
}