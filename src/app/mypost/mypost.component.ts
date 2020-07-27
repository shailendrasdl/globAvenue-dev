import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { AutomobileService } from '../services/automobile.service';
import { BoatService } from '../services/boat.service';
import { GlobtechService } from '../services/globtech.service';

import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
  sellersPermitFile: any;
  //base64s
  ExteriorPicString: string;
  //json
  finalJson = {};
  video_url;
  token;
  realestate;
  email;
  emailid;
  getautomobile;
  imageError :string;
  boat;
  globtech;
  realestate_details;
  closeResult: string;
  submitted=false;
  loading = false;
  postId;
  deleteId;
  edit_realestate:FormGroup;
  editRealpost;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  automobile_details;automobile_edit;user_id;mobile;name; 
  editAutomobilePost;
  boat_details;
  editboatPost;
  globtech_details;
  editglobtechPost;
  error_msg;
  noRealestate=false;
  noBoat=false;
  noAutomobile=false;
  noGlobtech=false;
  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private authenticationService : AuthenticationService,
              private automobileService: AutomobileService,
              private boatService: BoatService,
              private globtechService: GlobtechService,
              private toastr: ToastrService,
              private router: Router,
              private modalService: NgbModal
    ) {
      this.token = localStorage.getItem('token');
     console.log(this.token);
     }
     edit_automobile : FormGroup;
     edit_boat: FormGroup;
     globtech_edit: FormGroup;
  
  ngOnInit() {
      var token_ = JSON.parse(localStorage.getItem('token'));
      var email = token_.data.email;
      var user_id = token_.data._id;
      this.user_id = user_id;
      var email = token_.data.email;
      this.email = email;
      this.mobile = token_.data.phone;
      var name = token_.data.username;
      this.name = name;

      this.edit_realestate = this.formBuilder.group({
        postId: [''],
        //video_url:[this.video_url, Validators.required],
        video_url:['data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb2'],
        name: ['', Validators.required],
        mobile: ['', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
        email: this.email,
        address: ['', Validators.required],
        description: ['', Validators.required],
        keywords: ['',Validators.required],
        type: ['', Validators.required],
        purpose: ['', Validators.required],
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
      
      this.edit_automobile = this.formBuilder.group({
        postId:[''],
        // display_contact: new FormArray([]),
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
    this.edit_boat = this.formBuilder.group({
      postId:[''],
      user_id:[this.user_id],
      category: ["boats"],
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
    
    this.globtech_edit = this.formBuilder.group({
      postId:[''],
     // display_contact: new FormArray([]),
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
    })
        /*Get realestate posts*/
          this.userService.getrealestate(email).subscribe((res) =>{
          if(res.status === 200)
          {
            console.log('Result data is',res);
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

        /*Get Automobile posts*/
          this.email=email;
          this.emailid = {"email":this.email}
          this.automobileService.getautomobileByEmail(this.emailid).subscribe((res) =>{
          if(res.status === 200 )
          {
          this.getautomobile = res["data"];
          console.log('All automobiles are',this.getautomobile);
          }
          },
          (error)=>{
            if(error.status === 404)
            { 
                this.noAutomobile=true;
                this.error_msg=error.error.msg;
            }   
          });  
          
        
         /*get boats by email*/
        this.boatService.getboatsByEmail(email).subscribe((res) =>{
        
          if(res.status_code === 200 ){
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
        /*Globtech by email*/
        this.globtechService.getGlobtechByEmail(email).subscribe((res) => {
          if(res.status_code === 200){
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
        /*----end----*/
  }

  get editVal(){
    return this.edit_realestate.controls;
  }

  get editAuto_val(){
    return this.edit_automobile.controls;
  }
  

  openRealestate(targetModal, item) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     windowClass : "myCustomModalClass realestateModal"
    });
   this.realestate_details = item;
   this.realestate_details.value;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

/*Delete Realestate*/
deleteRealestate(_id){
  this.submitted=true;
  if(this.submitted=true){
    this.modalService.dismissAll();
  }
  this.deleteId = _id;
  this.postId = {"postId": this.deleteId}
// console.log('delete this user of id',this.postId.value);
 
  this.userService.deleteRealestate(this.postId).subscribe((data)=>{
    
    if(data.status == 200)
    {
      this.toastr.success(data.msg);
      location.reload();
      return;
    }
    else
    {
      this.toastr.error(data.msg);
    }
  },
  (error)=>{
    this.toastr.error(error.msg, 'error');   
  })
}

editRealestateModal(targetModal1, realestate_details) {
  this.modalService.open(targetModal1, {
   centered: true,
   backdrop: 'static',
   windowClass : "myCustomModalClass"
  });
  console.log('realestate details are',realestate_details);
}
/*Update realestate*/
updateRealestate(){
  this.submitted=true;
  if(this.edit_realestate.invalid){
    return;
  }
  
  if(this.submitted=true)
  {
    this.loading=true;
  //this.modalService.dismissAll();
  }
  //this.video_url = {"video_url":this.ExteriorPicString}
  //const editRealpost = {...this.edit_realestate.value, ...this.video_url}
  const editRealpost = {...this.edit_realestate.value}
  this.editRealpost=editRealpost;
  //console.log('Realestate updated details are',this.editRealpost.value);
  this.userService.updateRealestate(this.editRealpost).subscribe((data)=>{
    if(data.status == 200)
    {
      this.toastr.success(data.msg);
      location.reload();
      return;
    }
    else
    {
      this.toastr.error(data.msg);
      this.loading=false;
    }
  },
  (error)=>{
  this.toastr.error(error.msg, 'error');   
})
}
/*----end----*/
/*view automobile detail modal*/
openAutomobile(targetModal,automobile){
  this.modalService.open(targetModal,{
    centered:true,
    backdrop:'static',
    windowClass: "myCustomModalClass automobileDetail"
  });
  this.automobile_details=automobile;
}
/*----end----*/
/*Edit automobile detail*/
editAutomobileModal(targetModal,automobile_details){
  this.modalService.open(targetModal,{
      centered:true,
      backdrop:'static',
      windowClass: "myCustomModalClass automobileEditModal"
  });
  this.automobile_edit = automobile_details;
  console.log('Edit automobile',this.automobile_edit);
}
/*----end----*/
/*Update automobile*/
updateAUtomobile(edit_automobile){
  this.submitted = true;
  if(this.edit_automobile.invalid){
    return;
  }
  if(this.submitted = true){
    this.loading = true;
  }
   //this.video_url = {"video_url":this.ExteriorPicString}
   //const editAutomobilePost = {...this.edit_automobile.value, ...this.video_url}
   const editAutomobilePost = {...this.edit_automobile.value}
   this.editAutomobilePost = editAutomobilePost;
   //console.log('Realestate updated details are',this.editRealpost.value);
   this.automobileService.updateAutomobile(this.editAutomobilePost).subscribe((data)=>{
     if(data.status === 200)
     {
       this.toastr.success(data.msg);
       location.reload();
       return;
     }
     else
     {
       this.toastr.error(data.msg);
       this.loading=false;
     }
   },
   (error)=>{
     this.toastr.error(error.msg, 'error');   
   })
 }
 /*----end----*/
  /*Delete Realestate*/
  deleteAutomobile(_id){
 
    this.submitted=true;
    if(this.submitted=true){
      this.modalService.dismissAll();
    }
    this.deleteId = _id;
    this.postId = {"postId": this.deleteId}
  // console.log('delete this user of id',this.postId.value);
   
    this.automobileService.deleteAutomobile(this.postId).subscribe((data)=>{
      debugger;
      if(data.status == 200)
      {
        this.toastr.success(data.msg);
        location.reload();
        return;
      }
      else
      {
        this.toastr.error(data.msg);
      }
    },
    (error)=>{
      this.toastr.error(error.msg, 'error');   
    })
  }
  /*----end----*/
  openBoatdetails(targetModal, boats){
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: "static",
        windowClass: "myCustomModalClass"
    });
    this.boat_details = boats;
  }
  /*Delete Boats*/
deleteBoats(_id){
 
  this.submitted=true;
  if(this.submitted=true){
    this.modalService.dismissAll();
  }
  this.deleteId = _id;
  console.log('Delete ID',this.deleteId);
  this.postId = {"postId": this.deleteId}
console.log('delete this user of id',this.postId);
 
  this.boatService.deleteBoat(this.postId).subscribe((data)=>{
    
    if(data.status == 200)
    {
      this.toastr.success(data.msg);
      location.reload();
      return;
    }
    else
    {
      this.toastr.error(data.msg);
    }
  },
  (error)=>{
    this.toastr.error(error.msg, 'error');   
  })


}
/*----end----*/
editBoatModal(targetModal, boat_details) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static',
   windowClass : "myCustomModalClass"
  });
  console.log('Boat details are',boat_details);
}
get editBoat_val(){
  return this.edit_boat.controls;
}
update_boat(){
  this.submitted=true;
if(this.edit_boat.invalid){
  return;
}

if(this.submitted=true)
{
  this.loading=true;
//this.modalService.dismissAll();
}
//this.video_url = {"video_url":this.ExteriorPicString}
//const editRealpost = {...this.edit_realestate.value, ...this.video_url}
const editboatPost = {...this.edit_boat.value}
this.editboatPost=editboatPost;
//console.log('Realestate updated details are',this.editRealpost.value);
this.boatService.updateBoat(this.editboatPost).subscribe((data)=>{
  if(data.status == 200)
  {
    this.toastr.success(data.msg);
    location.reload();
    return;
  }
  else
  {
    this.toastr.error(data.msg);
    this.loading=false;
  }
},
(error)=>{
this.toastr.error(error.msg, 'error');   
})
}

openGlobtechModal(targetModal, globtech){
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    windowClass: 'customModal'
  });
  this.globtech_details = globtech;
}
deleteGlobtech(_id){
  this.submitted=true;
     if(this.submitted=true){
       this.modalService.dismissAll();
     }
     this.deleteId = _id;
     console.log('Delete ID',this.deleteId);
     this.postId = {"postId": this.deleteId}
   console.log('delete this user of id',this.postId);
    
     this.globtechService.delete_globtech(this.postId).subscribe((data)=>{
       
       if(data.status == 200)
       {
         this.toastr.success(data.msg);
         location.reload();
         return;
       }
       else
       {
         this.toastr.error(data.msg);
       }
     },
     (error)=>{
       this.toastr.error(error.msg, 'error');   
     })
 }
 editGlobtechModal(targetModal){
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    windowClass: 'customModal'
  });
}
get editGlobtech_val(){
  return this.globtech_edit.controls;
}
updateGlobtech(){
  this.submitted=true;

  if(this.globtech_edit.invalid){
    return;
  }
  
  if(this.submitted=true)
  {
    this.loading=true;
  //this.modalService.dismissAll();
  }
  //this.video_url = {"video_url":this.ExteriorPicString}
  //const editRealpost = {...this.edit_realestate.value, ...this.video_url}
  const editglobtechPost = {...this.globtech_edit.value}
  this.editglobtechPost=editglobtechPost;
  //console.log('Realestate updated details are',this.editRealpost.value);
  this.globtechService.updateGlobtech(this.editglobtechPost).subscribe((data)=>{
    if(data.status == 200)
    {
      this.toastr.success(data.msg);
      location.reload();
      return;
    }
    else
    {
      this.toastr.error(data.msg);
      this.loading=false;
    }
  },
  (error)=>{
  this.toastr.error(error.msg, 'error');   
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
}
