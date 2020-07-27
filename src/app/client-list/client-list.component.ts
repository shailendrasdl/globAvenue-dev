import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
		// remove user data from local storage for log out
		localStorage.removeItem('token');
		this.router.navigate(['/landing']);
	}
}
