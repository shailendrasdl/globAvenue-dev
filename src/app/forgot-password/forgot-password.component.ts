import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
	  private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  forgotForm: FormGroup;
	loading = false;
	submitted = false;

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({ 
			email: ['', Validators.required]
		});
  }

  onFormSubmit(email){ 					
			this.userService.forgotPassword(email)
			.subscribe(
				data => {				
					if(data.status === true) {
						this.toastr.success(data.msg, 'Success!');
					}
					else {
						this.toastr.warning(data.msg, 'Warning!');
					}
				},
				error => {
					this.toastr.error(error.msg, 'Error!');
				}
		);	
	}

}
