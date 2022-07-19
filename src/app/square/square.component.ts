import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  // rando:any;

  constructor() {
    // setInterval( () => this.rando = Math.random(), 5000);
   }

  ngOnInit(): void {
  }

}
