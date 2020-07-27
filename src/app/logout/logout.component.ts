import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

	constructor(
		private router: Router
	) { }
  
	ngOnInit() {
	}
	
	logout() {
      // remove user data from local storage for log out
      localStorage.removeItem('token');
      this.router.navigate(['/landing']);
	}
}
