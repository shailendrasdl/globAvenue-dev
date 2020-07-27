import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl, FormArray } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ModalContentComponent } from "../modal-content/modal-content.component";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { GlobtechService } from "../services/globtech.service";
declare var jQuery: any;

@Component({
  selector: 'app-globtech',
  templateUrl: './globtech.component.html',
  styleUrls: ['./globtech.component.css']
})
export class GlobtechComponent implements OnInit {
   
  token;
  globtech;
  error_msg;
  noGlobtech=false;
  constructor(private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private globtechService: GlobtechService) { 
      this.token = localStorage.getItem("token");
      console.log(this.token);
    }

  ngOnInit() {
  
    this.globtechService.getAllGlobtech().subscribe((res) => {
      if(res.status === 200)
      {
        this.globtech = res["data"];
        console.log('All globtech data by email is',this.globtech);
      }
     },
     (error)=>{
      if(error.status === 404)
      { 
          this.noGlobtech=true;
          this.error_msg=error.error.msg;
      }   
     });
  }
}
