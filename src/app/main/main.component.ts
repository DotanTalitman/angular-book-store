import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products=[{name:"Ant-Man"},{name:"Spider-Man"},{name:"Captain America"}];
  constructor() { }


  ngOnInit() {
  }

}
