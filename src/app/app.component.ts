import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Databinding';
  name:string = 'sreekanthreddy';
  name1:string ='hello'
  // message:string = 'hello';
  imageUrl:string="assets/images/index.jfif";
  onClickMe(){
this.title = "Welcome"
  }
}
