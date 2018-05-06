import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) { 
    authService.handleAuthentication();
  }

  ngOnInit() {
  }

  login(){
    this.authService.login();
  }
  logout(){
    this.authService.logout();
  }


}
