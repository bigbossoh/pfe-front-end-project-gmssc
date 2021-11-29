/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Societe } from '../models/societe';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1societesService extends __BaseService {
  static readonly getListeDesSocietesPath = '/gmssc/api/v1/societes/all';
  static readonly deleteSocieteByIdPath = '/gmssc/api/v1/societes/delete/{idSociete}';
  static readonly saveSocietePath = '/gmssc/api/v1/societes/savesociete';
  static readonly updatingSocietePath = '/gmssc/api/v1/societes/update';
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
  getListeDesSocietesResponse(): __Observable<__StrictHttpResponse<Array<Societe>>> {
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
        return _r as __StrictHttpResponse<Array<Societe>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getListeDesSocietes(): __Observable<Array<Societe>> {
    return this.getListeDesSocietesResponse().pipe(
      __map(_r => _r.body as Array<Societe>)
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
  saveSocieteResponse(body?: Societe): __Observable<__StrictHttpResponse<Societe>> {
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
        return _r as __StrictHttpResponse<Societe>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveSociete(body?: Societe): __Observable<Societe> {
    return this.saveSocieteResponse(body).pipe(
      __map(_r => _r.body as Societe)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  updatingSocieteResponse(body?: Societe): __Observable<__StrictHttpResponse<Societe>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/gmssc/api/v1/societes/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Societe>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  updatingSociete(body?: Societe): __Observable<Societe> {
    return this.updatingSocieteResponse(body).pipe(
      __map(_r => _r.body as Societe)
    );
  }

  /**
   * @param IdSociete undefined
   * @return successful operation
   */
  getSocieteByIDResponse(IdSociete: number): __Observable<__StrictHttpResponse<Societe>> {
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
        return _r as __StrictHttpResponse<Societe>;
      })
    );
  }
  /**
   * @param IdSociete undefined
   * @return successful operation
   */
  getSocieteByID(IdSociete: number): __Observable<Societe> {
    return this.getSocieteByIDResponse(IdSociete).pipe(
      __map(_r => _r.body as Societe)
    );
  }
}

module Gmsscapiv1societesService {
}

export { Gmsscapiv1societesService }
