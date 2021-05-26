import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  faEye = faEye;
  faEdit = faEdit;
  faTrash = faTrash;

  public modalRef: BsModalRef= new BsModalRef(); // {1}
  constructor(private modalService: BsModalService, private dataservice:DataService) {
  } // {2}

  loading: boolean = false;
  errorMessage:string='';
  resp:any;

  public getTasks() {
    this.loading = true;
    this.errorMessage = "";
    this.dataservice.getTasks()
      .subscribe(
        (response : any) => {                           //next() callback
          console.log('response received')
          this.resp = response; 
        },
        (error : any) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false; 
        })
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
  title = 'myFirstApp';
  message= "Hello World?";
  msg="";
  flag: boolean = false;
  color : string='';
  myCounterInApp:number=0;

  sendMessage(value : any): string{
    debugger
    return this.message;
  }

  myEventHandler(event : any){
    this.myCounterInApp = event;
  }

  @ViewChild(HomeComponent, {static:true} )
  child: HomeComponent= new HomeComponent();

  ngOnInit(){
    //debugger
    let mychild = this.child;
    this.msg = this.dataservice.greet();
  }
  
  //multi slot content projection


}
