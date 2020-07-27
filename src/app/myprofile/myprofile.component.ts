import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { $ } from 'protractor';
//import { ProductsService } from '../myprofile.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  public token;
  name1:string = '';
  userdata: any = {};
  userdata_;
  role_;
  show: boolean = true;
  public isCollapsed = true;
  personalUser = false;
  professionalUser = false;
  email;
  constructor(    
	private route: ActivatedRoute,
	private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
	//public ps: ProductsService,
    private toastr: ToastrService
  ) { 
	this.token = localStorage.getItem('token');

  }

	myprofileForm: FormGroup;
	changePasswordForm: FormGroup;
	loading = false;
	submitted = false;

	ngOnInit() {
		//let role;
		this.myprofileForm = this.formBuilder.group({      
			role: ['', Validators.required],
			username: ['', Validators.required],
			phone: ['', Validators.required],
			email: ['', [Validators.required,Validators.email]],
			password: ['', Validators.required],
			conf_password: ['', Validators.required],
			location: [''],
			address: [''],
			country: [''],
			language: [''],
			zip_code: [''],
			profile_image: [''],
			contact_name: ['']
		});
		
		this.changePasswordForm = this.formBuilder.group({ 
			password: ['', Validators.required],
			conf_password: ['', Validators.required]
		});

		
		var token_ = JSON.parse(localStorage.getItem('token'));
		var token_email = token_.data.email;
		
		this.route.params.subscribe(params => {
			this.userService.editProfile(token_email).subscribe(res => {
				//return res;
				this.userdata = res;
				let{role} = this.userdata.data;
				var role_ =`${role}`;
				//alert(role_);
				this.role_ = role_;
				console.log('role is:',this.role_);
				
				if(this.role_ == 1){
					this.personalUser = true;
					//alert('personal user');
				}
				else{
					this.professionalUser = true;
					//
					//alert('professional user');
				}
				//alert(`role ${role}`)
				console.log('This data:',this.userdata.data);
				/* added by BRI, @Mansi: You are missing the data key, 
					check the API structure before expose
				*/
				this.userdata_ = res["data"];
				console.log(this.userdata_);
				// let {username, email, role, phone, address, password} = this.userdata.data;
				// alert(`
				// 	   Name: ${username}
				// 	   Email id: ${email}
				// 	   Role: ${role}
				// 	   Role: ${phone}
				// 	   Address: ${address}
				// 	   Password: ${password}
				// 	 `)
				

				// added by BRI
				//alert(JSON.parse(this.userdata));
				//scope.res;
			});
		});
	}

	private imageSrc: string = '';

	handleInputChange(e) {
		var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
		var pattern = /video-*/;
		var reader = new FileReader();
		if (!file.type.match(pattern)) {
			alert('invalid format');
			return;
		}
		reader.onload = this._handleReaderLoaded.bind(this);
		reader.readAsDataURL(file);
	}
	_handleReaderLoaded(e) {
		let reader = e.target;
		this.imageSrc = reader.result;
		//console.log(this.imageSrc)
	}

	updateProfile() {	
		//this.handleInputChange(profile_image);
		this.route.params.subscribe(params => {
			// var token_ = JSON.parse(localStorage.getItem('token'));
			// var token_email = token_[0].email;
			this.userService.updateProfile(this.myprofileForm.value)
			.subscribe(
				data => {				
					if(data.status === true) {
						this.toastr.success(data.msg, 'Success!');
						this.router.navigate(['/myprofile']);
					}
					else {
						this.toastr.warning(data.msg, 'Warning!');
					}
				},
				error => {
					this.toastr.error(error.msg, 'Error!');
				}
			);
			//this.router.navigate(['/home']);
		});			
	}
	
	changePassword(password, conf_password){ 
		this.route.params.subscribe(params => {
			var token_ = JSON.parse(localStorage.getItem('token'));
			var token_ID= token_.data._id;
			
			this.userService.changePassword(token_ID,password, conf_password)
			.subscribe(
				data => {				
					if(data.status === true) {
						this.toastr.success(data.msg, 'Success!');
						this.router.navigate(['/myprofile']);
					}
					else {
						this.toastr.warning(data.msg, 'Warning!');
					}
				},
				error => {
					this.toastr.error(error.msg, 'Error!');
				}
			);
			//this.router.navigate(['/home']);
		});	
	}

	/*
	onFormSubmit(){
		console.log(this.myprofileForm.value);
		this.submitted = true;
		// return for here if form is invalid
		if (this.myprofileForm.invalid) {
		  return;
		}
		this.loading = true;
		
		this.userService.profileupdate(this.myprofileForm.value).subscribe(
			(data)=>{		  
				if(data.status === true) {			  
					//window.localStorage.setItem('token', data.token);
					this.toastr.success(data.msg);
					//this.router.navigate(['/login']);
				}
				else {			   
					this.toastr.error(data.msg);
					this.loading = false;
				}
			},
			(error)=>{
				this.toastr.error(error.error.msg, 'Error');
				this.loading = false;
			}
		)
	} 
	*/
}
