import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-testregister',
  templateUrl: './testregister.component.html',
  styleUrls: ['./testregister.component.css']
})
export class TestregisterComponent implements OnInit {
  userdata: any = {};
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }
  
  // registerForm: FormGroup;
  // loading = false;
  // submitted = false;
  
  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.userService.editProfile(params.id).subscribe(res => {
        this.userdata = res;
        console.log(this.userdata);

    });
  });
  }


}
