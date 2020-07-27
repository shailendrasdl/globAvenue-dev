import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  constructor(private http: HttpClient) { }

  post_boat(result){
    console.log('Post ad boat in service', result);
    return this.http.post<any>(`/boatsPost`, result);
  }
  getboatsByEmail(email){
    const obj={email};
    return this.http.post<any>(`/getBoatsByEmail`, obj);
  }
  getallBoats(){
    return this.http.get<any>(`/boatsApproveList`);
  }
  getboatsById(id){
    console.log('id in console',id);
    return this.http.get(`/getBoatsById/${id}`);
  }
  updateBoat(result){
    console.log('update boat details in service',result);
    return this.http.post<any>(`/updateBoatesDetails`, result);
  }
  deleteBoat(postId){
    return this.http.post<any>(`/deleteboats`, postId);
  }
}
