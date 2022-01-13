import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../../../gs-api/src/models/authentication-request';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../../../gs-api/src/models/authentication-response';
import { Gmsscapiv1authService } from 'src/gs-api/src/services/gmsscapiv-1auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authenticationService:Gmsscapiv1authService,
    private router:Router

  ) { }

  login(authenticationRequest:AuthenticationRequest) : Observable<AuthenticationResponse>{
    return this.authenticationService.authenticate(authenticationRequest);
  }
  setConnectedUser(authenticationResponse:AuthenticationResponse):void{
    localStorage.setItem('connectedUser',JSON.stringify(authenticationResponse));
  }
  getUtilisateurByEmail(email:string){
    //return UtilisateurService.find
  }
  isUserLoggedAndAccessTokenValid():boolean{
    if(localStorage.getItem('connectedUser')){
      // TODO Il faut verifier si le access taken est valid
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
