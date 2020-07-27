import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { DomSanitizer } from '@angular/platform-browser';
import{Realestate} from '../model/realestate';
  import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';

@Component({
  selector: 'app-realestate-details',
  templateUrl: './realestate-details.component.html',
  styleUrls: ['./realestate-details.component.css'],
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
export class RealestateDetailsComponent implements OnInit {
 //currentRate = 6;
 
 //hovered = 0;
 readonly = true;
    realestate_detail:{};
   
  id;
  postId;
  realestateItem;
  video_url;
  rating_list;
  avg_rating=[];
  closeResult:string;
  
  constructor( private route: ActivatedRoute,
     private router: Router, 
     private userService: UserService,private domSanitizer: DomSanitizer,
     private modalService: NgbModal,
     private formBuilder: FormBuilder ) { }
     contact_form: FormGroup;
  ngOnInit() {

    this.contact_form = this.formBuilder.group({
      category:[""],
      fname:[""],
      lname:[""],
      email:[""],
      phone:[""],
      country:[""],
      state:[""],
      zip_code:[""],
      address:[""]
    });


    this.realestate_detail = {type:""},{purpose:""},{time_of_avaliability:""},{type_of_space:""},{square_feet:""},{location:""},{no_of_bathrooms:""}
                             ,{no_of_bedrooms:""},{residential_or_holiday:""},{condition:""},{garage_included:""},{lift:""},{currency:""},{price:""},{rent_price:""},{monthly_charges:""}
                              ,{level:""},{amenities:""},{description:""},{video_url:""}
    this.route.params.subscribe(params => {
      let id = params['_id'];
      this.id=id;
      this.postId={"postId": this.id}
        this.userService.getRealestateById(this.postId).subscribe(res =>{
        this.realestate_detail = res["data"];
       // this.video_url = res["data"]["video_url"];
       
        console.log('Result data is', this.realestate_detail);
        //this.realestate_item.value;
      
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

openContact(targetModal){
  this.modalService.open(targetModal,{
    centered: true,
    backdrop: true,
    windowClass: "contact_form"
  });

}

/*Submit contact detail for customer*/
submitContact(){
  
  if(this.contact_form.value){
    this.userService.postContact(this.contact_form.value);
  }
  
}
}
