import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobtechService } from '../services/globtech.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-globtech',
  templateUrl: './view-globtech.component.html',
  styleUrls: ['./view-globtech.component.css'],
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
export class ViewGlobtechComponent implements OnInit {
  //currentRate = 6;
  selected = 5;
  //hovered = 0;
  readonly = true;
  id;
  token;
  globtech_detail;
  avg_rating=[];
  constructor( private route: ActivatedRoute,
               private router: Router,
               private globtechService: GlobtechService,
               private userService: UserService
   ) {
    this.token = localStorage.getItem('token'); 
    console.log(this.token);
    }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      let id = params["_id"];
      this.id = id;
      this.globtechService.getGlobtechById(this.id).subscribe(res=>{
        this.globtech_detail = res["data"];
        console.log('globtech details are',this.globtech_detail);
      })
    });

      /*Average rating*/
      this.userService.get_averageRating().subscribe((res) =>{
        this.avg_rating = res["data"];
        });
  }

}
