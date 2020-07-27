import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl, FormArray} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { AutomobileService } from '../services/automobile.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Automobile } from '../model/automobile';
import { Observable } from 'rxjs';
import { staticViewQueryIds } from '@angular/compiler';
declare var jQuery: any;

@Component({
  selector: 'app-automobile',
  templateUrl: './automobile.component.html',
  styleUrls: ['./automobile.component.css']
})
export class AutomobileComponent implements OnInit {
  email;
  user_id;
  token;
  emailid;
  getautomobile;
  noAutomobile=false;
  error_msg;
  //public value: string;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService : AuthenticationService,
    private automobileService: AutomobileService,
    private toastr: ToastrService,
    private modalService: NgbModal,
   
  ) {
    this.token = localStorage.getItem('token');  
    console.log(this.token);
  }
  automobile_post : FormGroup;  edit_automobile : FormGroup;
  ngOnInit()  {
      var token_ = JSON.parse(localStorage.getItem('token'));
      var user_id = token_.data._id;
      this.user_id = user_id;
      var email = token_.data.email;
      this.email = email;
      
    /*Get automobile by email*/ 
    this.automobileService.getallAutomobile().subscribe((res)=>{
        console.log('automobile data',res);
          if(res.status === 200)
          {
            this.getautomobile = res["data"];
          }
        },
        (error)=>{
          if(error.status === 404)
        { 
          this.noAutomobile=true;
          this.error_msg=error.error.msg;
        }   
        
      })
  }

}
