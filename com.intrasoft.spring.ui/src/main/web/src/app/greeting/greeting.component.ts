import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {


  greeting:any = [];
  
  constructor(public rest:RestService) { }

  ngOnInit() {
   this.getGreeting();
  }

  getGreeting() {
    this.greeting = [];
    this.rest.getGreeting().subscribe((data: {}) => {
      console.log(data);
      this.greeting = data;
    });
  }

}
