/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BienImmobilier } from '../models/bien-immobilier';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1biensService extends __BaseService {
  static readonly getAllBienPath = '/gmssc/api/v1/biens/all';
  static readonly deleteBienByIdPath = '/gmssc/api/v1/biens/delete/{IdBien}';
  static readonly getBienByIDPath = '/gmssc/api/v1/biens/getbien/{codebien}';
  static readonly saveBienImmobilierPath = '/gmssc/api/v1/biens/savebien';
  static readonly updatingBienImmobilierPath = '/gmssc/api/v1/biens/update';
  static readonly getBienByID_1Path = '/gmssc/api/v1/biens/{IdBien}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getAllBienResponse(): __Observable<__StrictHttpResponse<Array<BienImmobilier>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/biens/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BienImmobilier>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllBien(): __Observable<Array<BienImmobilier>> {
    return this.getAllBienResponse().pipe(
      __map(_r => _r.body as Array<BienImmobilier>)
    );
  }

  /**
   * @param IdBien undefined
   * @return successful operation
   */
  deleteBienByIdResponse(IdBien: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gmssc/api/v1/biens/delete/${IdBien}`,
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
   * @param IdBien undefined
   * @return successful operation
   */
  deleteBienById(IdBien: number): __Observable<boolean> {
    return this.deleteBienByIdResponse(IdBien).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param codebien undefined
   * @return successful operation
   */
  getBienByIDResponse(codebien: string): __Observable<__StrictHttpResponse<BienImmobilier>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/biens/getbien/${codebien}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BienImmobilier>;
      })
    );
  }
  /**
   * @param codebien undefined
   * @return successful operation
   */
  getBienByID(codebien: string): __Observable<BienImmobilier> {
    return this.getBienByIDResponse(codebien).pipe(
      __map(_r => _r.body as BienImmobilier)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveBienImmobilierResponse(body?: BienImmobilier): __Observable<__StrictHttpResponse<BienImmobilier>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/biens/savebien`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BienImmobilier>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveBienImmobilier(body?: BienImmobilier): __Observable<BienImmobilier> {
    return this.saveBienImmobilierResponse(body).pipe(
      __map(_r => _r.body as BienImmobilier)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  updatingBienImmobilierResponse(body?: BienImmobilier): __Observable<__StrictHttpResponse<BienImmobilier>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/gmssc/api/v1/biens/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BienImmobilier>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  updatingBienImmobilier(body?: BienImmobilier): __Observable<BienImmobilier> {
    return this.updatingBienImmobilierResponse(body).pipe(
      __map(_r => _r.body as BienImmobilier)
    );
  }

  /**
   * @param IdBien undefined
   * @return successful operation
   */
  getBienByID_1Response(IdBien: number): __Observable<__StrictHttpResponse<BienImmobilier>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/biens/${IdBien}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BienImmobilier>;
      })
    );
  }
  /**
   * @param IdBien undefined
   * @return successful operation
   */
  getBienByID_1(IdBien: number): __Observable<BienImmobilier> {
    return this.getBienByID_1Response(IdBien).pipe(
      __map(_r => _r.body as BienImmobilier)
    );
  }
}

module Gmsscapiv1biensService {
}

export { Gmsscapiv1biensService }
