import { Component } from '@angular/core';
import { environment } from './../environment/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    console.log(environment.production); // Logs false for default environment
  }
  
posts=[
  {
    title:'Biking',
    imageURL:'assets/biking.jpeg',
    username:'ikbiking',
    content:'It was a nice bike tour'
  },
  {
    title:'Mountain Climbing',
    imageURL:'assets/mountain.jpeg',
    username:'ikMount',
    content:'My mountain climbing experience today'
  },
  {
    title:'Hiking',
    imageURL:'assets/tree.jpeg',
    username:'iknature',
    content:'Let s take a walk in nature'
  },
]
}
