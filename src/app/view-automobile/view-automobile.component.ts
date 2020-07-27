import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutomobileService } from '../services/automobile.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-automobile',
  templateUrl: './view-automobile.component.html',
  styleUrls: ['./view-automobile.component.css'],
  styles: [`
  .star {
    font-size: 1.5rem;
    color: #fdc91b;
  }
  .filled {
    color: #fdc91b;
  }
  .bad {
    color: #F3E2A9;
  }
  .filled.bad {
    color: #fdc91b;
  }
`]  
})
export class ViewAutomobileComponent implements OnInit {
  //currentRate = 6;
  selected = 5;
//hovered = 0;
readonly = true;
  id;
  postId;
  automobile_detail=[];
  token;
  avg_rating=[];
  constructor(private route: ActivatedRoute,
              private router: Router, 
              private automobileService: AutomobileService,
              private userService: UserService
              ) { 
                this.token = localStorage.getItem('token'); 
                console.log('fsdf',this.token);
              }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['_id']; 
      this.postId=id;
      //this.postId={"postId": this.id}
        this.automobileService.getautomobileById(this.postId).subscribe(res =>{
        this.automobile_detail = res["data"];
        console.log('Automobile details are', this.automobile_detail);
       });
    });

     /*Average rating*/
     this.userService.get_averageRating().subscribe((res) =>{
      this.avg_rating = res["data"];
      });
  }

}
