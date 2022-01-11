/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SignalerPanneDto } from '../models/signaler-panne-dto';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1signalerPanneService extends __BaseService {
  static readonly getAllSignalerPannePath = '/gmssc/api/v1/signaler-panne/all';
  static readonly deleteSignalerPanneByIdPath = '/gmssc/api/v1/signaler-panne/delete/{IdPanne}';
  static readonly saveSignalerPannePath = '/gmssc/api/v1/signaler-panne/savesignalerpanne';
  static readonly getSignalerPanneDtoPath = '/gmssc/api/v1/signaler-panne/{IdPanne}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getAllSignalerPanneResponse(): __Observable<__StrictHttpResponse<Array<SignalerPanneDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/signaler-panne/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SignalerPanneDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllSignalerPanne(): __Observable<Array<SignalerPanneDto>> {
    return this.getAllSignalerPanneResponse().pipe(
      __map(_r => _r.body as Array<SignalerPanneDto>)
    );
  }

  /**
   * @param IdPanne undefined
   * @return successful operation
   */
  deleteSignalerPanneByIdResponse(IdPanne: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gmssc/api/v1/signaler-panne/delete/${IdPanne}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * @param IdPanne undefined
   * @return successful operation
   */
  deleteSignalerPanneById(IdPanne: number): __Observable<boolean> {
    return this.deleteSignalerPanneByIdResponse(IdPanne).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveSignalerPanneResponse(body?: SignalerPanneDto): __Observable<__StrictHttpResponse<SignalerPanneDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/signaler-panne/savesignalerpanne`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SignalerPanneDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveSignalerPanne(body?: SignalerPanneDto): __Observable<SignalerPanneDto> {
    return this.saveSignalerPanneResponse(body).pipe(
      __map(_r => _r.body as SignalerPanneDto)
    );
  }

  /**
   * @param IdPanne undefined
   * @return successful operation
   */
  getSignalerPanneDtoResponse(IdPanne: number): __Observable<__StrictHttpResponse<SignalerPanneDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/signaler-panne/${IdPanne}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SignalerPanneDto>;
      })
    );
  }
  /**
   * @param IdPanne undefined
   * @return successful operation
   */
  getSignalerPanneDto(IdPanne: number): __Observable<SignalerPanneDto> {
    return this.getSignalerPanneDtoResponse(IdPanne).pipe(
      __map(_r => _r.body as SignalerPanneDto)
    );
  }
}

module Gmsscapiv1signalerPanneService {
}

export { Gmsscapiv1signalerPanneService }
