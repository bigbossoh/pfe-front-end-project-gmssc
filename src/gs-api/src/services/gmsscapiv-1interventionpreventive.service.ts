/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PreventiveDto } from '../models/preventive-dto';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1interventionpreventiveService extends __BaseService {
  static readonly getAllPreventivePath = '/gmssc/api/v1/intervention/preventive/all';
  static readonly deletePreventiveByIdPath = '/gmssc/api/v1/intervention/preventive/delete/{IdPreventive}';
  static readonly savePreventivePath = '/gmssc/api/v1/intervention/preventive/savepreventive';
  static readonly getPreventiveByIDPath = '/gmssc/api/v1/intervention/preventive/{IdPreventive}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getAllPreventiveResponse(): __Observable<__StrictHttpResponse<Array<PreventiveDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/intervention/preventive/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PreventiveDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllPreventive(): __Observable<Array<PreventiveDto>> {
    return this.getAllPreventiveResponse().pipe(
      __map(_r => _r.body as Array<PreventiveDto>)
    );
  }

  /**
   * @param IdPreventive undefined
   * @return successful operation
   */
  deletePreventiveByIdResponse(IdPreventive: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gmssc/api/v1/intervention/preventive/delete/${IdPreventive}`,
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
   * @param IdPreventive undefined
   * @return successful operation
   */
  deletePreventiveById(IdPreventive: number): __Observable<boolean> {
    return this.deletePreventiveByIdResponse(IdPreventive).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  savePreventiveResponse(body?: PreventiveDto): __Observable<__StrictHttpResponse<PreventiveDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/intervention/preventive/savepreventive`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PreventiveDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  savePreventive(body?: PreventiveDto): __Observable<PreventiveDto> {
    return this.savePreventiveResponse(body).pipe(
      __map(_r => _r.body as PreventiveDto)
    );
  }

  /**
   * @param IdPreventive undefined
   * @return successful operation
   */
  getPreventiveByIDResponse(IdPreventive: number): __Observable<__StrictHttpResponse<PreventiveDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/intervention/preventive/${IdPreventive}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PreventiveDto>;
      })
    );
  }
  /**
   * @param IdPreventive undefined
   * @return successful operation
   */
  getPreventiveByID(IdPreventive: number): __Observable<PreventiveDto> {
    return this.getPreventiveByIDResponse(IdPreventive).pipe(
      __map(_r => _r.body as PreventiveDto)
    );
  }
}

module Gmsscapiv1interventionpreventiveService {
}

export { Gmsscapiv1interventionpreventiveService }
