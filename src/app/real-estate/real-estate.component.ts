import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "../services/authentication.service";
import { UserService } from "../services/user.service";
import { ModalContentComponent } from "../modal-content/modal-content.component";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Realestate } from "../model/realestate";

@Component({
  selector: "app-real-estate",
  templateUrl: "./real-estate.component.html",
  styleUrls: ["./real-estate.component.css"],
})
export class RealEstateComponent implements OnInit {
  closeResult: string;
  public token;
  // realestate: Realestate[];
  realestate;
  realstate_;
  error_msg;
  realestate_details;
  noRealestate=false;
  //public value: string;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {
    this.token = localStorage.getItem("token");
  }

  realestate_post: FormGroup;

  posted = false;
  reset: boolean = false;
  ngOnInit() {
    var token_ = JSON.parse(localStorage.getItem("token"));
    console.log(token_);

    /*Get realestate details*/

    this.route.params.subscribe((params) => {
      this.userService.getallRealestate().subscribe((res) => {
        if(res.status === 200 )
        {
          console.log("Result data is", res);
          this.realestate = res["data"];
        }
       },
       (error)=>{
        if(error.status === 404)
        { 
            this.noRealestate=true;
            this.error_msg=error.error.msg;
        }   
       });
    });

  }

  /*Logout*/
  logout() {
    // remove user data from local storage for log out
    localStorage.removeItem("token");
    this.router.navigate(["/landing"]);
  }
}
