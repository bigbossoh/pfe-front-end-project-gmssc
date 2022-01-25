import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.css']
})
export class PageDashboardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    console.log("we are getting insde of dashboard page");

    //this.refresh()
  }
  refresh(): void {

    var isLoadedBefore = localStorage.getItem("isLoadedBefore");
    if(isLoadedBefore=="true"){
      console.log("we are in header true");
      return;
    }
     else {
    console.log("we are in header not true");
    localStorage.setItem("isLoadedBefore","true");
    window.location.reload()
    }
  }
}
