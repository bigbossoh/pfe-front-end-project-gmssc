import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../../../gs-api/src/models/authentication-request';
import { Observable, of } from 'rxjs';
import { AuthenticationResponse } from '../../../gs-api/src/models/authentication-response';


import { UtilisateurDto } from '../../../gs-api/src/models/utilisateur-dto';
import { Gmsscapiv1authService } from 'src/gs-api/src/services/gmsscapiv-1auth.service';
import { Gmsscapiv1utilisateursService } from 'src/gs-api/src/services';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(

    private authenticationService:Gmsscapiv1authService,
    private utilisateurService: Gmsscapiv1utilisateursService,
    private router:Router

  ) { }

  login(authenticationRequest:AuthenticationRequest) : Observable<AuthenticationResponse>{
    return this.authenticationService.authenticate(authenticationRequest);
  }
  setAccessToken(authenticationResponse:AuthenticationResponse):void{
    localStorage.setItem('AccessToken',JSON.stringify(authenticationResponse));
  }
  getUserByEmail(email?:string) : Observable<UtilisateurDto>{
    if(email !==undefined){
      return this.utilisateurService.getUtilisateurByEmail(email);
    }
    return of();
  }
  setConnectedUser(utilisateurDto:UtilisateurDto):void{
    localStorage.setItem('connectedUser',JSON.stringify(utilisateurDto));
  }
  getConnectedUser():UtilisateurDto{
  //  console.log("we are going to check something",localStorage.getItem('connectedUser'));

    if(localStorage.getItem('connectedUser')){
     // console.log("we are enter into localstostage");

      return JSON.parse(localStorage.getItem('connectedUser') as string)
    }
   // console.log("we are not enter into localstostage");
    return {};
  }
  isUserLoggedAndAccessTokenValid():boolean{
    if(localStorage.getItem('AccessToken')){
      // TODO Il faut verifier si le access taken est valid
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
