import { Component, OnInit, Inject,ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import { TaskdataserviceService } from '../taskdataservice.service';



@Component({
  selector: 'app-dialogmodal',
  templateUrl: './dialogmodal.component.html',
  styleUrls: ['./dialogmodal.component.css']
})
export class DialogmodalComponent implements OnInit {

  yourWish;
  loading: boolean = false;
  errorMessage:string='';
  time;
  meridian = true;
  

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private tservice:TaskdataserviceService) { }

  ngOnInit(): void {
  }


  submitForm(data: any){

    let hour;
    let minute;
    let second;
  
    if(data.value.timepicker.hour < 10){
      hour = '0'+data.value.timepicker.hour;
    }
    else{
      hour = data.value.timepicker.hour;
    }
    if(data.value.timepicker.minute < 10){
      minute = '0'+data.value.timepicker.minute;
    }
    else{
      minute = data.value.timepicker.minute;
    }
    if(data.value.timepicker.second < 10){
      second = '0'+data.value.timepicker.second;
    }
    else{
      second = data.value.timepicker.second;
    }


   console.log(data.value.duedate.toString("YYYY-MM-DD")+'T'+hour+':'+minute+':'+second);
   
   const body = {
      "Quote_Type": data.value.quotetype,
      "Contact": data.value.contactname,
      "Task": data.value.taskdesc,
      "Due_Date": data.value.duedate.toString("YYYY-MM-DD")+'T'+hour+':'+minute+':'+second,
      "Task_type": data.value.tasktype
    }

   this.postTaskDetails(body);

  }

  public postTaskDetails(data:any){
    // debugger
    this.loading = true;
    this.errorMessage = "";
    this.tservice.postTask(data)
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
