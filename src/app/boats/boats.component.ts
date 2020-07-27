import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ModalContentComponent } from "../modal-content/modal-content.component";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { BoatService } from "../services/boat.service";

declare var jQuery: any;

@Component({
  selector: "app-boats",
  templateUrl: "./boats.component.html",
  styleUrls: ["./boats.component.css"]
})
export class BoatsComponent implements OnInit {
  token;
  boat;
  error_msg;
  noBoat=false;
  closeResult: string;
  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private boatService: BoatService
  ) {
    this.token = localStorage.getItem("token");
    console.log(this.token);
  }

  ngOnInit() {
    var token_ = JSON.parse(localStorage.getItem("token"));
   
    /*get boats by email*/
    this.boatService.getallBoats().subscribe((res) => {
      if(res.status === 200)
      {
        console.log('Boat data',res);
        this.boat = res["data"];
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
  }
 
}
