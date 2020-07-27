import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

declare var jQuery: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isvalid: boolean=true;
 changevalue(isvalid){
    this.isvalid=isvalid
  }
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService

  ) { }

  registerForm: FormGroup;
  loading = false;
  submitted = false;
     
	ngOnInit(){ 	   
		this.registerForm = this.formBuilder.group({      
			role: ['', Validators.required],
			username: ['', Validators.required],
			phone: ['', Validators.required],
			email: ['', [Validators.required,Validators.email]],
			password: ['', Validators.required],
			conf_password: ['', Validators.required],
			location: [''],
			address: [''],
			zip_code: [''],
			contact_name: ['']
		});
  
   
     // For tab section
      // (function ($) {
      //   $(document).ready(function () 
      //   { 
      //    $("#watch-me").click(function()
      //    {
      //      $("#show-me:hidden").show('slow');
      //     $("#show-me-two").hide();
      //     $("#show-me-three").hide();
      //     });
      //     $("#watch-me").click(function()
      //    {
      //      if($('watch-me').prop('checked')===false)
      //     {
      //      $('#show-me').hide();
      //     }
      //    });
         
         
         
         
         
         
      //    $("#see-me").click(function()
      //    {
      //      $("#show-me-two:hidden").show('slow');
      //     $("#show-me").hide();
      //     $("#show-me-three").hide();
      //     });
      //     $("#see-me").click(function()
      //    {
      //      if($('see-me-two').prop('checked')===false)
      //     {
      //      $('#show-me-two').hide();
      //     }
      //    });
         
      //  $("#look-me").click(function()
      //    {
      //      $("#show-me-three:hidden").show('slow');
      //     $("#show-me").hide();
      //     $("#show-me-two").hide();
      //     });
      //     $("#look-me").click(function()
      //    {
      //      if($('see-me-three').prop('checked')===false)
      //     {
      //      $('#show-me-three').hide();
      //     }
      //    });
         
      //   });
      // })(jQuery);


	}
  get fval() { return this.registerForm.controls; }
  
  onFormSubmit(){
    console.log(this.registerForm.value);
    this.submitted = true;
    // return for here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    
    this.userService.register(this.registerForm.value).subscribe(
      (data)=>{
      
        if(data.status === true) {
          
          window.localStorage.setItem('token', data.token);
             this.toastr.success(data.msg);
            this.router.navigate(['/login']);
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
}
