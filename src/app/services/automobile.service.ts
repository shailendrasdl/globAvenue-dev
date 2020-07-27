import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutomobileService {

  constructor(private http: HttpClient) { }

  getallAutomobile(){
    return this.http.get<any>(`/automobileApproveList`);
  }
  getautomobileById(postId){
    return this.http.get(`/getAutomobileById/${postId}`);
  }
  postAutomobile(result){ 
		console.log('service:', result);
		return this.http.post<any>(`/automobilePost`, result);
  }
  /*Get automobile by email*/
  getautomobileByEmail(email){
    //console.log('Service',email);
    return this.http.post<any>(`/getAutomobileByEmail`, email);
  }
  /*-----end------*/

  /*Update automobile */
  updateAutomobile(result){
  console.log('Service data',result);
  return this.http.post<any>(`/updateAutomobileDetails`, result);
  }
  /**----end----*/

  /*Delete Automobile*/
  deleteAutomobile(postId){
    console.log('delete this',postId);
    return this.http.post<any>(`/deleteAutomobile`, postId);
  }
  /*----end----*/
}
