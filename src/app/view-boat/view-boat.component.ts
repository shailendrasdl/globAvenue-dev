import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoatService } from '../services/boat.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-view-boat',
  templateUrl: './view-boat.component.html',
  styleUrls: ['./view-boat.component.css'],
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
export class ViewBoatComponent implements OnInit {
  //currentRate = 6;
  selected = 5;
  //hovered = 0;
  readonly = true;
  boat=[];
  token;
  avg_rating=[];
  constructor(private route: ActivatedRoute,
    private router: Router, 
    private boatService: BoatService,
    private userService: UserService) { 
      this.token = localStorage.getItem('token'); 
      console.log(this.token);
    }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      let id = params['_id'];
      this.boatService.getboatsById(id).subscribe(res =>{
      this.boat = res["data"];
      console.log(this.boat);
      })
    });

     /*Average rating*/
     this.userService.get_averageRating().subscribe((res) =>{
      this.avg_rating = res["data"];
      });
  }

}
