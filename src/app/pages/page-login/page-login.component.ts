import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from '../../../gs-api/src/models/authentication-request';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  authenticationRequest: AuthenticationRequest ={};
  errorMessage='';

  constructor(
    private userService:UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
login(){
  this.userService.login(this.authenticationRequest).subscribe(
    (data)=>{
      this.errorMessage=''
     // localStorage.setItem('authenticationResponse',JSON.stringify(data));
     this.userService.setConnectedUser(data);
     this.router.navigate(['']);

    }, error=>{
     console.log(error);
     // debugger
      //this.router.navigate(['inscrire']);
      //this.errorMessage=error.error.message;
      this.errorMessage='Login et/ou Mot de passe incorrecte.'
    }

  );
}
}
