import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { Myprofile } from '../model/myprofile';

@Injectable({
  providedIn: 'root'
})
export class MyprofileService {

	constructor(private http: HttpClient) { }

	/*
	profileupdate(myprofile: Myprofile) {
		return this.http.post<any>(`/profileUpdate`, myprofile);
	}
	*/
}
