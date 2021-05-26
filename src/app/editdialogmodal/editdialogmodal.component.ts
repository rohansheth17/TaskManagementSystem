import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskdataserviceService } from '../taskdataservice.service';

@Component({
  selector: 'app-editdialogmodal',
  templateUrl: './editdialogmodal.component.html',
  styleUrls: ['./editdialogmodal.component.css']
})
export class EditdialogmodalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private tservice: TaskdataserviceService) { }

  dataelement;
  loading: boolean = false;
  errorMessage:string='';

  ngOnInit(): void {
    this.dataelement = this.tservice.msg;
    this.tservice.msg = null;
  }

  editForm(data: any){

    console.log(data.value.contactname);
 
    const body = {
       "QuoteID": data.value.quote,
       "Quote_Type": data.value.quotetype,
       "Contact": data.value.contactname,
       "Task": data.value.taskdesc,
       "Due_Date": data.value.duedate,
       "Task_type": data.value.tasktype
     }
 
    this.putTaskDetails(body);
 
   }
 
   public putTaskDetails(data:any){
     // debugger
     this.loading = true;
     this.errorMessage = "";
     this.tservice.putTask(data)
       .subscribe((response : any) => {                           //next() callback
           console.log('response received')
         },
         (error : any) => {                              //error() callback
           console.error('Request failed with error')
           this.errorMessage = error;
           this.loading = false;
         })
   }



}
