import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Realestate } from '../model/realestate';
import { AutomobileService } from '../services/automobile.service';
import { BoatService } from "../services/boat.service";
import { GlobtechService } from "../services/globtech.service";

declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email;
  realestate;
  emailid;
  getautomobile;
  boat;
  public token: string;
  globtech;
  error_msg;
  noRealestate=false;
  noBoat=false;
  noAutomobile=false;
  noGlobtech=false;
  constructor( private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private automobileService: AutomobileService,
    private toastr: ToastrService,
    private boatService: BoatService,
    private globtechService: GlobtechService  
  ) { 
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
 
    /*Get realestate details*/
      this.userService.getallRealestate().subscribe((res) =>{
      if(res.status === 200)
      {
      //console.log('Result data is',res);
      this.realestate = res["data"];
      console.log('In home page',this.realestate);
      }
     },
     (error)=>{
      if(error.status === 404)
      { 
          this.noRealestate=true;
          this.error_msg=error.error.msg;
      }   
     }
     );

      /*----end----*/

    /*Get automobile */
   
      this.automobileService.getallAutomobile().subscribe((res) =>{
      if(res.status === 200)
      {
        this.getautomobile = res["data"];
        console.log('All automobiles in home page are',this.getautomobile);
      }
     },
     (error)=>{
      if(error.status === 404)
      { 
          this.noAutomobile=true;
          this.error_msg=error.error.msg;
      }   
     });            
   
    /*----end----*/

     /*get boats*/
     this.boatService.getallBoats().subscribe((res) =>{
      if(res.status === 200)
      {
        console.log('Boat data',res);
        this.boat = res["data"];
        console.log('boat for home page',this.boat);
      }
      },
      (error)=>{
        if(error.status === 404)
      { 
          this.noBoat=true;
          this.error_msg=error.error.msg;
      }   
      });
    /*----end----*/

    /*Get Globtech*/
    this.globtechService.getAllGlobtech().subscribe((res) => {
      if(res.status === 200)
      {
        console.log('Globtech on landing page',res);
        this.globtech = res["data"];
      }
    },
    (error)=>{
      if(error.status === 404)
      { 
          this.noGlobtech=true;
          this.error_msg=error.error.msg;
      }   
    })

   
  }

  
  carouselOptions = {
    margin:10,
     nav: false,
     dots:false,
     // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
     responsiveClass: true,
     responsive: {
       0: {
         items: 1,
         nav: true
       },
       600: {
         items: 1,
         nav: true
       },
       1000: {
         items: 4,
         nav: false,
         loop: false
       },
       1500: {
         items: 4,
         nav: false,
         loop: false
       }
     }
   }
 
   
	images = [
		{       
			image: "../assets/images/realestate2.jpg",
			protitle: "Mercedes SL 320 ",
			proimage: "../assets/images/globautologo.png",
			proprice: "40,000.00"
		}        
	]
	mySlideImages = ['../assets/images/realestate2.jpg','../assets/images/realestate2.jpg','../assets/images/realestate2.jpg','../assets/images/realestate2.jpg','../assets/images/realestate2.jpg','../assets/images/realestate2.jpg','../assets/images/realestate2.jpg','../assets/images/realestate2.jpg'];
	myCarouselImages =['../assets/images/image1.jpg','../assets/images/image2.jpeg','../assets/images/image3.jpg'];
  
 // mySlideOptions={items: 4, dots: true, nav: true};
 myCarouselOptions={items: 3, dots: true, nav: true};
}
