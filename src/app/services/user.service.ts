import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';
import { Realestate } from '../model/realestate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	userdata_;
	realestate: Realestate[];
  constructor(private http: HttpClient) { }

	register(user: User) {
		return this.http.post<any>(`/registerUser`, user);
	}

	
	editProfile(email) {
		const obj = {
			email	  
		};		
		//console.log('In service is',email);
		return this.http.post<any>(`/myProfile`, obj);
	}
	
	// editProfile(id) {
	
	// 	return this.http.get(`/getProfile/${id}`);
	// }

	getUser() {
		return this.http.get(`/usersList`);
	}


	
	updateProfile(result) {
		// const obj = {
		// 	email,
		// 	country,
		// 	language,
		// 	location,
		// 	profile_image,
		// 	phone	  
		// };		  
		//console.log(obj);
		return this.http.post<any>(`/profileUpdate`, result);
	}
	
	changePassword(userId,password, conf_password) {
		const obj = {
			userId,
			password,
			conf_password
		};		  
		console.log(obj);
		return this.http.post<any>(`/changePassword`, obj);
	}

	forgotPassword(email) {
		const obj = {
			email
		};		  
		console.log(obj);
		return this.http.post<any>(`/forgotPassword`, obj);
	}

	postrealestate(result){ 
		console.log('service:', result);
		return this.http.post<any>(`/realestatePost`, result);
	}

	getallRealestate(){
		return this.http.get<any>(`/realestateApproveList`);
	}
	
	getrealestate(email){
		return this.http.get<any>(`/getRealestate/${email}`);
	}

	/*get realestate by Id*/
	getRealestateById(postId){
		return this.http.post(`/getRealestateById` , postId);
	}
	/* Update realestate */
	updateRealestate(result){
		console.log('updated details in service', result);
		return this.http.post<any>(`/updateRealestate` , result);
	}
	/*--end--*/

	/*Delete realestate*/
	deleteRealestate(postId)
	{
	//console.log('delete',postId);
	return this.http.post<any>(`/deleteRealestate` , postId);
	}
	/*--end--*/

	/*Get all plan*/
	getAllplan(){
		return this.http.get<any>(`/getAllPlan`);
	}
	/*----end----*/
	send_rating(result){
		console.log('rating in service',result);
		return this.http.post<any>(`/submitRatingAndReview`, result);
	}
	get_ratingList(){
		return this.http.get(`/ratingList`);
	}
	get_averageRating(){
		return this.http.get('/averageRating');
	}
	postContact(data){
		console.log('submit contact in service',data);
	}
// register_professional(user: User) {
//   return this.http.post<any>(`/register`, user);
// }

}
