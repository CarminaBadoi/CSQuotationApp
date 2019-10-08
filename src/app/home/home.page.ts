import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email:string;
  password:string;
  textEmail:string;
  textPassword:string;

  myEmail:string;
  myPassword:string;
  constructor() {
    
  }



  ngOnInit() {
this.myEmail="";
this.myPassword="";
    
  }
  setEmail(){
    this.textEmail = this.myEmail;
    console.log(this.email);
    this.textPassword = this.myPassword;
    console.log(this.password);
  }
  
}
