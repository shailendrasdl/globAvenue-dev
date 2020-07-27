import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var jQuery: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  name = 'Angular';
  editProfileForm: FormGroup;
  myForm: FormGroup;
  // userList: any = [
  //   {
  //     "name" : "Test User"
  //   },
  //   {
  //     "name" : "Hello World"
  //   },
  //   {
  //     "name" : "User Three"
  //   }
  // ]

  userList = [
    {
     id: "1",
     firstname: "Aiman",
     lastname: "Rahmat", 
     username: "aimanrahmat",
     email: "aimanrahmat@gmail.com"
    },
    {
     id: "2",
     firstname: "Christiano",
     lastname: "Ronaldo",
     username: "ronaldo7",
     email: "ronaldo7@gmail.com"
    },
    {
     id: "3",
     firstname: "Wayne",
     lastname: "Rooney",
     username: "rooney8",
     email: "rooney8@gmail.com"
    }];

  imageSrc;
  sellersPermitFile: any;

  //base64s
  ExteriorPicString: string;
  
  //json
  finalJson = {};

  addPictures() {
    this.finalJson = {
      "sellersPermitFile": this.ExteriorPicString,
    }
   // console.log(this.imageSrc);
  }
  public picked(event) {
    
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
    
        this.sellersPermitFile = file;
        this.handleInputChange(file); //turn into base64
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
   return this.imageSrc = base64result;
    //console.log(this.imageSrc);
    
        this.ExteriorPicString = base64result;
       this.log();
  }

  log() { 
    // for debug
  
    console.log(this.ExteriorPicString);
   alert(this.ExteriorPicString);
  }

  
  constructor(private modalService: NgbModal,private formbuilder:FormBuilder) { }

  openModal(targetModal, user) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });
   console.log(user);
}

// onSubmit() {
//  this.modalService.dismissAll();
//  console.log("res:", this.editProfileForm.getRawValue());
// } 
  ngOnInit(){
  
    this.myForm = this.formbuilder.group({
      email:[""],
      fname:[""],
      password:[""],
      contact:[""]
    });

    (function ($) {
      $(document).ready(function () 
      { 
       $("#watch-me").click(function()
       {
         $("#show-me:hidden").show('slow');
        $("#show-me-two").hide();
        $("#show-me-three").hide();
        });
        $("#watch-me").click(function()
       {
         if($('watch-me').prop('checked')===false)
        {
         $('#show-me').hide();
        }
       });
       
       
       
       
       
       
       $("#see-me").click(function()
       {
         $("#show-me-two:hidden").show('slow');
        $("#show-me").hide();
        $("#show-me-three").hide();
        });
        $("#see-me").click(function()
       {
         if($('see-me-two').prop('checked')===false)
        {
         $('#show-me-two').hide();
        }
       });
       
     $("#look-me").click(function()
       {
         $("#show-me-three:hidden").show('slow');
        $("#show-me").hide();
        $("#show-me-two").hide();
        });
        $("#look-me").click(function()
       {
         if($('see-me-three').prop('checked')===false)
        {
         $('#show-me-three').hide();
        }
       });
       
      });
    })(jQuery);
  }

  myFormSubmit(){
    console.log('Result of form data is',this.myForm.value);
  }
}