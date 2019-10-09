  import { Component } from '@angular/core';
  import { Observable } from 'rxjs';
  import { RestApiService } from 'src/app/services/quotationapp.service';

  @Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })

  export class HomePage {
    companies: Observable<any>;
    email:string;
    password:string;
    textEmail:string;
    textPassword:string;
    people:any;
    myEmail:string;
    myPassword:string;
    constructor(public api: RestApiService) {}

    ngOnInit() {
      this.myEmail="";
      this.myPassword="";
      this.getCompanies();
    }

    async getCompanies(){ 
      this.companies= await this.api.getCompanies();
    }

    
    setEmail(){
      this.textEmail = this.myEmail;
      console.log(this.email);
      this.textPassword = this.myPassword;
      console.log(this.password);
    }
    
    
  }
