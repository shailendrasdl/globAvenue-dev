import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutomobileService } from '../services/automobile.service';
import{Automobile} from '../model/automobile';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-automobile-detail',
  templateUrl: './automobile-detail.component.html',
  styleUrls: ['./automobile-detail.component.css'],
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
export class AutomobileDetailComponent implements OnInit {
  //currentRate = 6;
  selected = 5;
  //hovered = 0;
  readonly = true;
  id;
  postId;
  automobile_detail:{};
  avg_rating=[];
  constructor(private route: ActivatedRoute,
    private router: Router, 
    private automobileService: AutomobileService,
    private userService: UserService) {
this.automobile_detail = {make:""},{model:""},{accessories:""},{address:""},{category:""},{color:""},{condition:""}
                        ,{currency:""},{description:""},{display_contact:""},{doors:""},{doors:""},{emission_class:""},{engine:""}
                        ,{equipment_description:""},{fuel:""},{gear_type:""},{horse_power:""},{interior_seats:""},{keywords:""},{location:""}
                        ,{mileage:""},{mobile:""},{name:""},{payment_status:""},{price:""},{seats:""},{seller:""},{variant:""};

     }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      let id = params['_id']; 
      this.postId=id;
      //this.postId={"postId": this.id}
        this.automobileService.getautomobileById(this.postId).subscribe(res =>{
        this.automobile_detail = res["data"];
        console.log('Automobile details are', this.automobile_detail);
        console.log('Automobile details are', this.automobile_detail[0].make);
        //this.realestate_item.value;
      
      });
    });

       /*Average rating*/
       this.userService.get_averageRating().subscribe((res) =>{
        this.avg_rating = res["data"];
        });
  }

}
