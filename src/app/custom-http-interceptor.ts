import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
        const reqWithAuth = req.clone({
            setHeaders: {
                //'Content-Type': 'application/json',
                'Authorization': `Bearer `+sessionStorage.getItem('token')
            }

        });
        
        return next.handle(reqWithAuth);
    }


}