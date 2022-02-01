import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from 'src/app/composants/loader/service/loader.service';
import { AuthenticationResponse } from '../../../gs-api/src/models/authentication-response';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor  {


  constructor(
    private loaderService: LoaderService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    let authenticationResponse: AuthenticationResponse = {};
    if (localStorage.getItem('AccessToken')) {
      authenticationResponse = JSON.parse(
        localStorage.getItem('AccessToken') as string
      );
      const authReq = req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + authenticationResponse.accessToken
        })
      });
      return this.handleRequest(authReq,next);
    }
    return next.handle(req);
  }
  handle(authReq: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    throw new Error('Method not implemented.');
  }

  handleRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.loaderService.hide();
        }
      }, (err: any) => {
          this.loaderService.hide();
      }));
  }
}
