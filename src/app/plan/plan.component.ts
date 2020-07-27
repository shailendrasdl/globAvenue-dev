import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  public token;
  plan;
  singlePlan;
  platinum;
  gold;
  silver;
  plan_status;gold_status;silver_status;
  platinum_status;
  platinum_plan = false;
  silver_plan = false;
  gold_plan = false; 
 
   constructor(  private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService : AuthenticationService,
    private userService: UserService,
    private toastr: ToastrService) {
    
    this.token=localStorage.getItem('token');
      console.log('plan session',this.token);
     }

  ngOnInit() {

    this.userService.getAllplan().subscribe(res => {
      
      this.plan=res;
      //this.plan = res["plan"];
      this.platinum_status = this.plan.plan[0].status;
      //console.log('asdasd',this.platinum_status)      
      if(this.platinum_status == true){
        this.platinum_plan = true;
        let platinum = this.plan.plan[0];
        this.platinum = platinum;
      }

      this.silver_status = this.plan.plan[1].status;
      if(this.silver_status == true){
        this.silver_plan = true;
        let silver = this.plan.plan[2];
        this.silver = silver;
      }

      this.gold_status = this.plan.plan[2].status;
      if(this.gold_status == true){
        this.gold_plan = true;
        let gold = this.plan.plan[1];
        this.gold = gold;
      }
      console.log('Individual Plan',this.plan);
    });
  }

}
