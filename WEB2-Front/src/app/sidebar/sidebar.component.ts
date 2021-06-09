import { Component, OnInit } from '@angular/core';
import { UserLoginServiceService } from '../Services/user-login-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logOut() 
  {
    localStorage.removeItem('nettoken');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
  }
}
