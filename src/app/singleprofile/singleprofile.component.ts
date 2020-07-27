import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-singleprofile',
  templateUrl: './singleprofile.component.html',
  styleUrls: ['./singleprofile.component.css']
})
export class SingleprofileComponent implements OnInit {
  user: User[];
  
  
  userdata: any = {};
  constructor(private route: ActivatedRoute,private userService:UserService, private router: Router) { }

  ngOnInit() {

    this.userService
    .getUser()
    .subscribe((data: User[]) => {
      //const user = JSON.stringify(data);
      this.user=data;
    
      console.log(this.user);
  });

  //   var token_ = JSON.parse(localStorage.getItem('token'));
  //   var token_email = token_[0].email;
    
  //   this.userService
  //   .editProfile(token_email)
  //   .subscribe((data: User[]) => {
  //     return this.user = data;
  //     console.log(this.user);
  // });

    // this.route.params.subscribe(params => {
		// 	this.userService.editProfile(token_email).subscribe((data: User[]) => {
		// 		//return res;
				
		// 		 this.user = data;
		// 		//this.userdata_ = res.data;
		// 		console.log(this.user);
		// 		//scope.res;
		// 	});
		// });
  }


}
