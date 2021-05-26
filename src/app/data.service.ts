import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
 

@Injectable()
export class DataService{
    greet(){
        return "Hello Class";
    }
 
    constructor(private http: HttpClient) {
    }
    
    getTasks(): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer xEXP9-7TPFt2Vwhdh24lO8sJaQa4eBpA-cs3d9kLE11sGBEMPdW0MLEUG7-6V1u5CKWyICBE_6oGat3tGgBRftUuGA3wQC-YOSFbJFZXxZoXWf5PM3DMSfrYAnG4ttikNWcci-0n-tSxt7iUz2H4H66s4axHsxMsLnR38TvWMIQuaSqEFpf3RpEOfMJWTby7tZYFHCCpplMW2UpwaQre3blvVLMf9yb1TdzXOQSQf9SBcF7wOXGYS7Q3YY3eEy22fauBzH0rVNqcH7Uoxlf5edUqYP0CH0fFJwFLNaIecAnqChcU8IkeEOREE6ZQL0MfOAJAOpOPexzMhH5Xfrv4e6r7D7wU5--xgFiNC2QZcw8YGwoL33RkdOTverU41QN-8MwfQTknIc_08DitAE-tY-CwUTqzZxZcHa8h0Tx6B0WK4blUEsH12-BRWVJq_XRBcRNEBJQwTBNG4h9vodICDtLh2u1qlVCPQMx-vzqvD_4`
        })
        return this.http.get('https://localhost:44323/api/Tasks/GetTasks', { headers: headers });

        //return this.http.get('https://localhost:50222/api/Tasks');
    }




}