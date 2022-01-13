import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../../../gs-api/src/models/authentication-response';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor  {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   // throw new Error('Method not implemented.');

   let authenticationResponse:AuthenticationResponse={};
   if(localStorage.getItem('connectedUser')){
    authenticationResponse=JSON.parse(
      localStorage.getItem('connectedUser') as string
    );
   }
   const re = `/gmssc/api/v1/auth/authenticate`;
   if (req.url.search(re) === -1 ) {
    const authReq=req.clone({
      headers: new HttpHeaders({
        Authorization: 'Bearer '+authenticationResponse.accessToken
      })
    });
    return next.handle(authReq);
  }
  const authReq=req.clone({

  });
    return next.handle(authReq);
  }
}
