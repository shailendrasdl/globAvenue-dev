import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormControl,FormArray} from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
declare var jQuery: any;

@Component({
  selector: 'app-view-realestate',
  templateUrl: './view-realestate.component.html',
  styleUrls: ['./view-realestate.component.css'],
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
export class ViewRealestateComponent implements OnInit {
currentRate = 5;
//selected;
//hovered = 0;
readonly = true;
token;
id;
postId;
realestate_detail=[];
user_id;
name;
rating_list;
avg_rating=[];

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private userService: UserService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService) {
      this.token = localStorage.getItem('token'); 
    }
    post_rating : FormGroup;
  ngOnInit() {
    
    var token_ = JSON.parse(localStorage.getItem('token'));
		console.log(token_);
		var user_id = token_.data._id;
    this.user_id = user_id;
    var name = token_.data.username;
    this.name = name;
    this.post_rating = this.formBuilder.group({
      user_id:[this.user_id],
      name:[this.name],
      product_id:[''],
      type:[''],
      review:[''],
      rating:[''],
    });
    
    this.route.params.subscribe(params => {
      let id = params['_id'];
      this.id=id;
      this.postId={"postId": this.id}
        this.userService.getRealestateById(this.postId).subscribe(res =>{
        this.realestate_detail = res["data"];
       console.log('Realestate details are', this.realestate_detail);
      });
    });
    
    /*Get ratings*/
    this.userService.get_ratingList().subscribe(res =>{
    console.log('rating list',res);
     this.rating_list = res["data"];
    });
    /*--end--*/
    
    /*Average rating*/
    this.userService.get_averageRating().subscribe((res) =>{
    this.avg_rating = res["data"];
    });
    
  }

  postrating(){
    console.log('rating are',this.post_rating.value);
    this.userService.send_rating(this.post_rating.value).subscribe((res) => {
      if(res.status === 201){
        this.toastr.success(res.msg);
      }
        
  });
}
 

}
