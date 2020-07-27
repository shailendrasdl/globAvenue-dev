import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    session;
    msg;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService : AuthenticationService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /* To access form fields */
  get fval() { return this.loginForm.controls; }
  
  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
       return;
      
    }
   
    this.loading = true;
    this.authenticationService.login(this.fval.email.value, this.fval.password.value)
    .subscribe(
      
    //   data => {
    //    debugger; 
    //     if(data.status === 200) {
         
    //    // window.localStorage.setItem('token', data);
    //     //localStorage.setItem('token', JSON.stringify(data));
    //     this.session=data;
    //     localStorage.setItem('token', this.session);
    //       this.toastr.success(data.msg);
    //       this.router.navigate(['/home']);
    //     }
    //     else if(data.status === 403 ) {
    //       this.toastr.error(data.msg);
    //       this.loading = false;
    //     }
    //     else if(data.status === 404 ) {
    //       this.toastr.error(data.msg);
    //       this.loading = false;
    //     }
    //     error => {
    //       this.toastr.error('Network Error');  
    //       this.loading = false;
    //     }
       
    //   },
      data=>{
        if (data.status === 200) {
            this.session = data;
            //window.localStorage.setItem('token', this.session);
            localStorage.setItem('token', JSON.stringify(this.session));
            JSON.parse(localStorage.getItem('token'));
            this.toastr.success(data.msg);
            this.router.navigate(['/home']);
          } 
      },
      msg => {
            this.msg=msg;
            //console.log(this.msg.error.msg);
            this.toastr.error(this.msg.error.msg);  
            this.loading = false; 
        
            },
    
       
    );
   
  }
}
