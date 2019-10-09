import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestApiService } from 'src/app/services/login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
    @Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })

  export class HomePage implements OnInit{
    loginForm: FormGroup;
    companies: Observable<any>;
    email:string;
    password:string;
    textEmail:string;
    textPassword:string;
    people:any;
    myEmail:string;
    myPassword:string;

    constructor(public api: RestApiService, 
    private formBuilder: FormBuilder) {}

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: [{value: ''}],
        password: [''],
      });

      this.myEmail="";
      this.myPassword="";
    }
    
    //change de name of get.companies into login
    async getCompanies(){
      await this.api.getCompanies().subscribe(data=>{this.companies=data});
    }

    setEmail(){
      this.textEmail = this.myEmail;
      this.textPassword = this.myPassword;
    }

  }
