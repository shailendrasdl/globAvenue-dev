import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  
  }
  logout() {
		// remove user data from local storage for log out
		localStorage.removeItem('token');
		this.router.navigate(['/landing']);
	}
}
