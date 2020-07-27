import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl, FormArray} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { AutomobileService } from '../services/automobile.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Automobile } from '../model/automobile';
import { Observable } from 'rxjs';
declare var jQuery: any;

@Component({
  selector: 'app-automobile',
  templateUrl: './automobile.component.html',
  styleUrls: ['./automobile.component.css']
})
export class AutomobileComponent implements OnInit {
  public token;
  automobile: Automobile[];
 sellersPermitFile: any;
  //base64s
  ExteriorPicString: string;
  //json
  finalJson = {};
  video_url;
  submitted=false;
  loading = false;
  imageError :string;
  oneForm:FormGroup;
  postdata;
  email="";
  user_id="";
  mobile="";
  address;
  public checks: Array<any> = [
    {description: 'Mobile Number', value: 'mobile'},
    {description: "Email ID", value: 'email'},
    {description: "Address", value: 'address'},
    {description: "Location", value: 'location'},
  ];
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
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

  automobile_post : FormGroup;
  ngOnInit()  {
      var token_ = JSON.parse(localStorage.getItem('token'));
      var user_id = token_[0]._id;
      this.user_id = user_id;
      var email = token_[0].email;
      this.email = email;
      this.mobile = token_[0].phone;
      this.automobile_post = this.formBuilder.group({ 
        display_contact: new FormArray([]),
        user_id: this.user_id,
        category:['automobile', Validators.required],
        name:[this.mobile, Validators.required],
        mobile:['', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
        email:this.email,
        description:['', Validators.required],
        video_url:[this.video_url],
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
        first_regst_year:['', Validators.required],
        currency:['', Validators.required],
        price:['', Validators.required],
        waranty:['', Validators.required],
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
    
   /*To  display file uploads in input type file */
    (function ($) {( 
      function ( document, window, index ) {
        var inputs = document.querySelectorAll( '.inputfile' );
        Array.prototype.forEach.call( inputs, function( input ) {
          var label  = input.nextElementSibling,
          labelVal = label.innerHTML;
      
          input.addEventListener( 'change', function( e ) {
            var fileName = '';
            if( this.files && this.files.length > 1 )
              fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
              fileName = e.target.value.split( '\\' ).pop();
      
            if( fileName )
              label.querySelector( 'span' ).innerHTML = fileName;
            else
              label.innerHTML = labelVal;
          });
      
          // Firefox bug fix
          input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
          input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
        });
      }( document, window, 0 ));
      
    })(jQuery);
    /*----end-----*/   
  }

  get postVal(){
    return this.automobile_post.controls;
  }
  postAutomobile(){
    this.submitted=true;
    if(this.automobile_post.invalid){
      return;
    }
    this.loading=true;
    this.route.params.subscribe(params => {
      this.video_url = {"video_url":this.ExteriorPicString}
      const postAdData = {...this.automobile_post.value, ...this.video_url}
      this.postdata=postAdData;
      console.log('-> postData :', this.postdata);
    this.automobileService.postAutomobile(this.postdata).subscribe((data)=>{
        debugger;
        if(data.status == true)
        {
          this.toastr.success(data.msg);
          location.reload();
          return;
        }
        else
        {
          this.toastr.error(data.msg);
          this.loading = false;
        }
      },
      (error)=>{
      this.toastr.error(error.msg, 'error');   
      this.loading = false;
    })
  });

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
/*Logout*/
  logout() {
		// remove user data from local storage for log out
		localStorage.removeItem('token');
		this.router.navigate(['/landing']);
	}
 
  /*For check box*/
  onCheckChange(event) {
    const formArray: FormArray = this.automobile_post.get('display_contact') as FormArray;
  
    /* Selected */
    if(event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else{
      // find the unselected element
      let i: number = 0;
  
      formArray.controls.forEach((ctrl: FormControl) => {
        if(ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
  
        i++;
      });
    }
  }

}
