import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskdataserviceService {

  msg;
  id;

  constructor(private http: HttpClient) { }

    getDataElement(data:any){
      this.msg = data;
    }

    getID(data:any){
      this.id = data;
    }

    loggedIn(): boolean {
      if(!sessionStorage.getItem('token')){
        return false;
      }
      return true;
    }



    tasktable(): Observable<any>{

      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/json',
      //   //'Authorization': `Bearer xEXP9-7TPFt2Vwhdh24lO8sJaQa4eBpA-cs3d9kLE11sGBEMPdW0MLEUG7-6V1u5CKWyICBE_6oGat3tGgBRftUuGA3wQC-YOSFbJFZXxZoXWf5PM3DMSfrYAnG4ttikNWcci-0n-tSxt7iUz2H4H66s4axHsxMsLnR38TvWMIQuaSqEFpf3RpEOfMJWTby7tZYFHCCpplMW2UpwaQre3blvVLMf9yb1TdzXOQSQf9SBcF7wOXGYS7Q3YY3eEy22fauBzH0rVNqcH7Uoxlf5edUqYP0CH0fFJwFLNaIecAnqChcU8IkeEOREE6ZQL0MfOAJAOpOPexzMhH5Xfrv4e6r7D7wU5--xgFiNC2QZcw8YGwoL33RkdOTverU41QN-8MwfQTknIc_08DitAE-tY-CwUTqzZxZcHa8h0Tx6B0WK4blUEsH12-BRWVJq_XRBcRNEBJQwTBNG4h9vodICDtLh2u1qlVCPQMx-vzqvD_4`
      //   'Authorization': `Bearer `+sessionStorage.getItem('token')
      // })
      return this.http.get('https://localhost:44323/api/Tasks/GetTasks'); //, { headers: headers }

    }

    GetTaskById(id:number): Observable<any>{

      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/json',
      //   'Authorization': `Bearer `+sessionStorage.getItem('token')
      // })


      return this.http.get('https://localhost:44323/api/Tasks/GetTasks?id='+id); //, { headers: headers }
    }

    postTask(data:any): Observable<any>{

      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/json',
      //   'Authorization': `Bearer `+sessionStorage.getItem('token')
      // })

      // const body = {
      //   "Quote_Type": "BFF",
      //   "Contact": "Supervisor",
      //   "Task": "Description about Quote",
      //   "Due_Date": "2021-02-04",
      //   "Task_type": "New"
      // }

      return this.http.post('https://localhost:44323/api/Tasks/PostTasks',data); //, { headers: headers }



    }

    deleteTask(id:number): Observable<any>{

      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/json',
      //   'Authorization': `Bearer `+sessionStorage.getItem('token')
      // })

      return this.http.delete('https://localhost:44323/api/Tasks/DeleteTasks?id='+id);  //, { headers: headers }


    }

    putTask(data:any): Observable<any>{

      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/json',
      //   'Authorization': `Bearer `+sessionStorage.getItem('token')
      // })

      return this.http.put('https://localhost:44323/api/Tasks/PutTasks',data); //, { headers: headers }



    }

    getToken(data:any): Observable<any>{

      debugger

      const headers = new HttpHeaders(
        {
            'Content-Type':  'application/x-www-form-urlencoded',
            'Accept': '*/*',
        }
      );

      const body = new HttpParams()
      .set('Username',data.value.emailid)
      .set('Password',data.value.password)
      .set('grant_type','password');

      const options = { headers: headers};
      return this.http.post('https://localhost:44323/token', body.toString(), options);


    }


}
