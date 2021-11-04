import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-bien-piece',
  templateUrl: './page-bien-piece.component.html',
  styleUrls: ['./page-bien-piece.component.css']
})
export class PageBienPieceComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  nouvellePiece():void{
  this.router.navigate(['nouvellePiece'])
  }
}
