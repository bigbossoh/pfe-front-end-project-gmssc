/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SocieteDto } from '../models/societe-dto';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1societesService extends __BaseService {
  static readonly getListeDesSocietesPath = '/gmssc/api/v1/societes/all';
  static readonly getListeDesSocietesfilterbysocietemaintenancePath = '/gmssc/api/v1/societes/allfilterbysocietemaintenance';
  static readonly getListeDesSocietesOrderByAscPath = '/gmssc/api/v1/societes/allorder';
  static readonly deleteSocieteByIdPath = '/gmssc/api/v1/societes/delete/{idSociete}';
  static readonly saveSocietePath = '/gmssc/api/v1/societes/savesociete';
  static readonly getSocieteByIDPath = '/gmssc/api/v1/societes/{IdSociete}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getListeDesSocietesResponse(): __Observable<__StrictHttpResponse<Array<SocieteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/societes/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SocieteDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getListeDesSocietes(): __Observable<Array<SocieteDto>> {
    return this.getListeDesSocietesResponse().pipe(
      __map(_r => _r.body as Array<SocieteDto>)
    );
  }

  /**
   * @return successful operation
   */
  getListeDesSocietesfilterbysocietemaintenanceResponse(): __Observable<__StrictHttpResponse<Array<SocieteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/societes/allfilterbysocietemaintenance`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SocieteDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getListeDesSocietesfilterbysocietemaintenance(): __Observable<Array<SocieteDto>> {
    return this.getListeDesSocietesfilterbysocietemaintenanceResponse().pipe(
      __map(_r => _r.body as Array<SocieteDto>)
    );
  }

  /**
   * @return successful operation
   */
  getListeDesSocietesOrderByAscResponse(): __Observable<__StrictHttpResponse<Array<SocieteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/societes/allorder`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SocieteDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getListeDesSocietesOrderByAsc(): __Observable<Array<SocieteDto>> {
    return this.getListeDesSocietesOrderByAscResponse().pipe(
      __map(_r => _r.body as Array<SocieteDto>)
    );
  }

  /**
   * @param idSociete undefined
   * @return successful operation
   */
  deleteSocieteByIdResponse(idSociete: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gmssc/api/v1/societes/delete/${idSociete}`,
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
   * @param idSociete undefined
   * @return successful operation
   */
  deleteSocieteById(idSociete: number): __Observable<boolean> {
    return this.deleteSocieteByIdResponse(idSociete).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveSocieteResponse(body?: SocieteDto): __Observable<__StrictHttpResponse<SocieteDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/societes/savesociete`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SocieteDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveSociete(body?: SocieteDto): __Observable<SocieteDto> {
    return this.saveSocieteResponse(body).pipe(
      __map(_r => _r.body as SocieteDto)
    );
  }

  /**
   * @param IdSociete undefined
   * @return successful operation
   */
  getSocieteByIDResponse(IdSociete: number): __Observable<__StrictHttpResponse<SocieteDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/societes/${IdSociete}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SocieteDto>;
      })
    );
  }
  /**
   * @param IdSociete undefined
   * @return successful operation
   */
  getSocieteByID(IdSociete: number): __Observable<SocieteDto> {
    return this.getSocieteByIDResponse(IdSociete).pipe(
      __map(_r => _r.body as SocieteDto)
    );
  }
}

module Gmsscapiv1societesService {
}

export { Gmsscapiv1societesService }
