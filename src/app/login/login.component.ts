import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskdataserviceService } from '../taskdataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  errorMessage:string='';
  resp:any;

  constructor(private tservice:TaskdataserviceService, private myrouter:Router) { }

  ngOnInit(): void {
  }

  submitLoginForm(data: any){
    debugger
    this.loading = true;
    this.errorMessage = "";
    this.tservice.getToken(data)
      .subscribe(
        (response : any) => {                           //next() callback
          console.log('response received')
          this.resp = response; 
          sessionStorage.setItem("token",this.resp.access_token);
          console.log(this.resp);
          this.myrouter.navigate(['tasks']);
        },
        (error : any) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
          console.log(error);
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false; 
        })


  }



}
