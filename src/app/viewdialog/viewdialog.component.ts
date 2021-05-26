import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskdataserviceService } from '../taskdataservice.service';

@Component({
  selector: 'app-viewdialog',
  templateUrl: './viewdialog.component.html',
  styleUrls: ['./viewdialog.component.css']
})
export class ViewdialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private tservice: TaskdataserviceService) { }

  taskID;
  resp;
  quoteID:number;
  qtype:string;
  contact:string;
  task:string;
  duedate: Date;
  tasktype:string;
  loading: boolean = false;
  errorMessage:string='';

  ngOnInit(): void {
    this.taskID = this.tservice.id;
    this.tservice.id = null;
    this.getTaskDetails(this.taskID)


  }

  public getTaskDetails(id:number){
    // debugger
    this.tservice.GetTaskById(id)
    .subscribe(
      (response : any) => {                           //next() callback
        console.log('response received')
        this.resp = response;
        this.quoteID = this.resp[0].QuoteID;
        this.qtype = this.resp[0].Quote_Type;
        this.contact = this.resp[0].Contact;
        this.task = this.resp[0].Task;
        this.duedate = this.resp[0].Due_Date;
        this.tasktype = this.resp[0].Task_type;
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

}
