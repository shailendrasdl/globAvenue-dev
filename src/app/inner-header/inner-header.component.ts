import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl,FormArray} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { BoatService } from "../services/boat.service";
import { AutomobileService } from '../services/automobile.service';
import { GlobtechService } from "../services/globtech.service";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
declare var jQuery: any;

@Component({
  selector: 'app-inner-header',
  templateUrl: './inner-header.component.html',
  styleUrls: ['./inner-header.component.css']
})
export class InnerHeaderComponent implements OnInit {
	post_realestate=false;
	post_boat=false;
	post_automobile=false;
	post_globtech=false;
	post_globpage=false;
	public activated: {
		realestate: boolean;
		boats: boolean;
		automobile: boolean;
		globtech: boolean;
		globpage: boolean;
		
	};
	token;user_id;mobile;email;video_url;postdata;name;
	sellersPermitFile: any;
	//base64s
	ExteriorPicString: string;
	//json
	finalJson = {};
	imageError :string;
	submitted=false;
	loading = false;
	mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
	realestate_post : FormGroup;
	boat_post: FormGroup;
	automobile_post: FormGroup;
	globtech_post: FormGroup;
	public checks: Array<any> = [
		{description: 'Mobile Number', value: 'mobile'},
		{description: "Email ID", value: 'email'},
		{description: "Address", value: 'address'},
		{description: "Location", value: 'location'},
	  ];
	constructor(
		private route: ActivatedRoute,
		private formBuilder: FormBuilder,
		private router: Router,
		private authenticationService : AuthenticationService,
		private userService: UserService,
		private boatService: BoatService,
		private automobileService: AutomobileService,
		private globtechService: GlobtechService,
		private toastr: ToastrService,
		private modalService: NgbModal
	) { 
		this.token = localStorage.getItem('token');  
		this.router = router;
		this.activated = {
			realestate: false,
			boats: false,
			automobile: false,
			globtech: false,		
			globpage: false,	
		};

	}
	
	ngOnInit() 
	{
		if(this.activated.realestate = this.router.isActive( "/realestate", true ))
		{	
			this.post_realestate=true;
			
		}
		if(this.activated.boats = this.router.isActive( "/boats", true ))
		{	
			this.post_boat=true;
			
		}
		if(this.activated.automobile = this.router.isActive( "/automobile", true ))
		{	
			this.post_automobile=true;
			
		}
		if(this.activated.globtech = this.router.isActive( "/globtech", true ))
		{	
			this.post_globtech=true;
			
		}
		if(this.activated.globpage = this.router.isActive( "/globpage", true ))
		{	
			this.post_globpage=true;
			
		}
		
		 /*To  display file uploads in input type file */
		 (function($) {
			(function(document, window, index) {
			  var inputs = document.querySelectorAll(".inputfile");
			  Array.prototype.forEach.call(inputs, function(input) {
				var label = input.nextElementSibling,
				  labelVal = label.innerHTML;
	  
				input.addEventListener("change", function(e) {
				  var fileName = "";
				  if (this.files && this.files.length > 1)
					fileName = (
					  this.getAttribute("data-multiple-caption") || ""
					).replace("{count}", this.files.length);
				  else fileName = e.target.value.split("\\").pop();
	  
				  if (fileName) label.querySelector("span").innerHTML = fileName;
				  else label.innerHTML = labelVal;
				});
	  
				// Firefox bug fix
				input.addEventListener("focus", function() {
				  input.classList.add("has-focus");
				});
				input.addEventListener("blur", function() {
				  input.classList.remove("has-focus");
				});
			  });
			})(document, window, 0);
		  })(jQuery);
		  /*----end-----*/
		  
	
	    var token_ = JSON.parse(localStorage.getItem('token'));
		console.log(token_);
		var user_id = token_.data._id;
		this.user_id = user_id;
		var email = token_.data.email;
		this.email = email;
		this.mobile = token_.data.phone;
		var name = token_.data.username;
		this.name = name;
		this.realestate_post = this.formBuilder.group({ 
		user_id:this.user_id,
		category: ['Realestate'],   
		name: ['', Validators.required],
		mobile: [this.mobile, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
		email: [this.email, Validators.required],
		address: ['', Validators.required],
		description: ['', Validators.required],
		keywords: ['', Validators.required],
		type: ['', Validators.required],
		purpose: ['', Validators.required],
		// video_url:[this.video_url, Validators.required],
		video_url:['data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb2'],
		time_of_avaliability: ['', Validators.required],
		type_of_space: ['', Validators.required],
		square_feet: ['', Validators.required],
		location: ['', Validators.required],
		no_of_bathrooms: ['', Validators.required],
		no_of_bedrooms: ['', Validators.required],
		residential_or_holiday: ['', Validators.required],
		condition: ['', Validators.required],
		garage_included: ['', Validators.required],
		lift: ['', Validators.required],
		currency: ['', Validators.required],
		price: ['', Validators.required],
		rent_price: ['', Validators.required],
		monthly_charges: ['', Validators.required],
		level: ['', Validators.required],
		amenities: ['', Validators.required]
		});

		this.boat_post = this.formBuilder.group({
			user_id:[this.user_id],
			category: ["boats"],
			display_contact: new FormArray([]),
			// base64_video:[this.base64_video, Validators.required],
			base64_video: ["data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb2"],
			name: [this.name, Validators.required],
			email: [this.email, Validators.required],
			mobile: [this.mobile, Validators.required],
			description: ["", Validators.required],
			address: ["", Validators.required],
			keywords: ["", Validators.required],
			make: ["", Validators.required],
			model: ["", Validators.required],
			currency: ["", Validators.required],
			price: ["", Validators.required],
			year: ["", Validators.required],
			length: ["", Validators.required],
			width: ["", Validators.required],
			depth: ["", Validators.required],
			vat_payed: ["", Validators.required],
			for: ["", Validators.required],
			boat_type: ["", Validators.required],
			power: ["", Validators.required],
			fuel: ["", Validators.required],
			water_capacity: ["", Validators.required],
			no_of_bathrooms: ["", Validators.required],
			no_of_bedrooms: ["", Validators.required],
			engine_hours: ["", Validators.required],
			engine_type: ["", Validators.required],
			no_of_engines: ["", Validators.required],
			hull_material: ["", Validators.required],
			color_hull: ["", Validators.required],
			location: ["", Validators.required]
		  });

		  this.automobile_post = this.formBuilder.group({ 
			display_contact: new FormArray([]),
			user_id: this.user_id,
			category:['automobile'],
			name:[this.name, Validators.required],
			mobile:[this.mobile, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
			email:[this.email, Validators.required],
			description:['', Validators.required],
			video_url:['data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb2'],
			// video_url:[this.video_url],
			keywords:['', Validators.required],
			address:['', Validators.required],
			make:['', Validators.required],
			model:['', Validators.required],
			variant:['', Validators.required],
			engine:['', Validators.required],
			horse_power:['', Validators.required],
			mileage:['', Validators.required],
			fuel:['', Validators.required],
			emission_class:['', Validators.required],
			registration_year:['', Validators.required],
			currency:['', Validators.required],
			price:['', Validators.required],
			warranty:['', Validators.required],
			location:['', Validators.required],
			color:['', Validators.required],
			interior_seats:['', Validators.required],
			doors:['', Validators.required],
			seats:['', Validators.required],
			equipment_description:['', Validators.required],
			accessories:['', Validators.required],
			seller:['', Validators.required],
			gear_type:['', Validators.required],
			condition:['', Validators.required]
			//display_contact:['', Validators.required]
			// video_url:['']
			
		});

		this.globtech_post = this.formBuilder.group({
			display_contact: new FormArray([]),
			user_id:[this.user_id],
			category:['Globtech'],
			 // base64_video:[this.base64_video, Validators.required],
			 base64_video: ["data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb2"],
			 name: [this.name, Validators.required],
			 email: [this.email, Validators.required],
			 mobile: [this.mobile, Validators.required],
			 description: ["", Validators.required],
			 address: ["", Validators.required],
			 keywords: ["", Validators.required],
			 make: ["", Validators.required],
			 price: ["", Validators.required],
			 location: ["", Validators.required]
			});
    
	}
	openPostmodal(targetModal) {
		this.modalService.open(targetModal, {
		 centered: true,
		 backdrop: 'static',
		 windowClass : "postad_realestate"
		});
	}
	get realestate_postVal(){
		return this.realestate_post.controls;
	  }
	postrealestate()
	{
	 this.submitted=true;
	
	  if(this.realestate_post.invalid){
		return;
	  }
	  this.loading = true;
	  // if(this.submitted=true){
	  //   this.modalService.dismissAll();
	  // }
	  this.route.params.subscribe(params => {
	   // this.video_url = {"video_url":this.ExteriorPicString}
		//const postAdData = {...this.realestate_post.value, ...this.video_url}
		const postAdData = {...this.realestate_post.value}
		this.postdata=postAdData;
		console.log('-> postData :', this.postdata);
	  this.userService.postrealestate(this.postdata).subscribe((data)=>{
		console.log('-> submit realestate');
		  if(data.status === 201)
		  { 
		   
			this.toastr.success(data.msg);
		this.modalService.dismissAll();
		this.router.navigate(['/plan']);
		//	location.reload();
			return;
		  }
		  else
		  {
			this.toastr.error(data.msg);
			this.loading = false;
		  }
		},
		(error)=>{
		this.toastr.error(error.msg, 'error');   
		this.loading = false;
	  })
	});
}

get boat_postVal() {
    return this.boat_post.controls;
  }

  post_boats() {
    this.submitted = true;
    if (this.boat_post.invalid) {
      return;
    }
    this.loading = true;
    
   console.log('added display contact in form',this.boat_post.value);
    this.boatService.post_boat(this.boat_post.value).subscribe((data) =>{
        
      console.log('console data is',data);
      //debugger;
      if(data.status == 201){
        this.toastr.success(data.msg);
        location.reload();
      }
      else{
        this.toastr.error(data.msg);
        this.loading = false;
      }
    },
    (error)=>{
      this.toastr.error(error.msg, 'error');   
      this.loading = false;
    })
  }

  get automobile_postVal(){
    return this.automobile_post.controls;
  }
  
  
  postAutomobile(){
    this.submitted=true;
    
    if(this.automobile_post.invalid){
      return;
    }
    this.loading=true; 
    this.route.params.subscribe(params => {
      // this.video_url = {"video_url":this.ExteriorPicString}
      const postAdData = {...this.automobile_post.value}
      this.postdata=postAdData;
      console.log('-> postData :', this.postdata);
    this.automobileService.postAutomobile(this.postdata).subscribe((data)=>{
		debugger;
        if(data.status === 201)
        {
          this.toastr.success(data.msg);
          location.reload();
          return;
        }
        else
        {
          this.toastr.error(data.msg);
          this.loading = false;
        }
      },
      (error)=>{
      this.toastr.error(error.msg, 'error');   
      this.loading = false;
    })
  });

  }

  get globtech_postVal() {
    return this.globtech_post.controls;
  }

  postGlobtech(){
    this.submitted = true;
    if (this.globtech_post.invalid) {
      return;
    }
    this.loading = true;
    console.log('Globtech post',this.globtech_post.value);
    this.globtechService.post_globtech(this.globtech_post.value).subscribe((data) =>{
        
        console.log('console data is',data);
        //debugger;
        if(data.status == 201){
          this.toastr.success(data.msg);
          this.loading = false;
         // this.modalService.dismissAll()
          location.reload();
        }
        else{
          this.toastr.error(data.msg);
          this.loading = false;
        }
      },
      (error)=>{
        this.toastr.error(error.msg, 'error');   
        this.loading = false;
      })
  }
public picked(event) {
	this.imageError = null;
	let fileList: FileList = event.target.files;
	if (fileList.length > 0) {
	  const file: File = fileList[0];
	  const max_size = 10530208;
	  if (file.size > max_size) {
		this.imageError = 'Maximum size allowed is 10 MB ';
		alert(this.imageError);
		return false;
	  }
	  else
	  {
		this.sellersPermitFile = file;
		this.handleInputChange(file); //turn into base64
	  }
	}
	else {
	  alert("No file selected");
	}
  }
  handleInputChange(files) {
	var file = files;
	var pattern = /video-*/;
	var reader = new FileReader();
	if (!file.type.match(pattern)) {
	  alert('invalid format');
	  return;
	}
	reader.onloadend = this._handleReaderLoaded.bind(this);
	reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
	let reader = e.target;
	var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
	console.log('base64result : ', base64result);
	//this.imageSrc = base64result;
	
	//this.ExteriorPicString = base64result;
	this.ExteriorPicString = 'data:video/mp4;base64,' + base64result;
	
  }
  /*For check box*/
onCheckChange(event) {
	const formArray: FormArray = this.globtech_post.get('display_contact') as FormArray;
	
	/* Selected */
	if(event.target.checked){
	  // Add a new control in the arrayForm
	  formArray.push(new FormControl(event.target.value));
	}
	/* unselected */
	else{
	  // find the unselected element
	  let i: number = 0;
	
	  formArray.controls.forEach((ctrl: FormControl) => {
		if(ctrl.value == event.target.value) {
		  // Remove the unselected element from the arrayForm
		  formArray.removeAt(i);
		  return;
		}
	
		i++;
	  });
	}
	}
	logout() {
		// remove user data from local storage for log out
		localStorage.removeItem('token');
		this.router.navigate(['/landing']);
	}
}
