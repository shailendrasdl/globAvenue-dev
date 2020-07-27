import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoatService } from '../services/boat.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-boat-detail',
  templateUrl: './boat-detail.component.html',
  styleUrls: ['./boat-detail.component.css'],
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
export class BoatDetailComponent implements OnInit {
  //currentRate = 6;
  selected = 5;
  //hovered = 0;
  readonly = true;
  boat=[];
  avg_rating=[];
  constructor(private route: ActivatedRoute,
    private router: Router, 
    private boatService: BoatService,
    private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      let id = params['_id'];
      this.boatService.getboatsById(id).subscribe(res =>{
      this.boat = res["data"];
      console.log(this.boat);
      })
    })

      /*Average rating*/
      this.userService.get_averageRating().subscribe((res) =>{
        this.avg_rating = res["data"];
        });
  }

}
