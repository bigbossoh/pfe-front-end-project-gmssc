import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurDto } from 'src/gs-api/src/models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  connectedUser:UtilisateurDto ={};

  constructor(
    private userService: UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.connectedUser=this.userService.getConnectedUser();
   // console.log("we are in header ",this.connectedUser);
 // this.refresh()
  }
  // refresh(): void {

  //     var isLoadedBefore = localStorage.getItem("IsLoadedBefore");
  //     if(isLoadedBefore=="true"){
  //       console.log("we are in header true");
  //       return;
  //     }
  //      else {
  //       console.log("we are in header not true");
  //     localStorage.setItem("IsLoadedBefore","true");
  //     window.location.reload()
  //     }
  //   }
logoutUser():void{
  localStorage.removeItem('AccessToken')
  localStorage.removeItem('connectedUser')
  this.router.navigate(['/login'])
}
}
