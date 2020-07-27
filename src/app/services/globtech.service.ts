import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobtechService {

  constructor(private http: HttpClient) { }

  getAllGlobtech(){
    return this.http.get<any>(`/globtechApproveList`);
  }
  
  post_globtech(result){
    return this.http.post<any>(`/globtechPost`, result);
  }

  getGlobtechByEmail(email){
    const obj = {email}
    return this.http.post<any>(`/getGlobtechByEmail`, obj);
  }
  delete_globtech(postId){
    console.log('service id', postId);
    return this.http.post<any>(`/deleteGlobtech`, postId);
  }
  updateGlobtech(result){
    return this.http.post<any>(`/updateGlobtecDetails`, result);
  }
  getGlobtechById(id){
    return this.http.get(`/getGlobtechById/${id}`);
  }
}
