/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ContratDto } from '../models/contrat-dto';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1contratsService extends __BaseService {
  static readonly getAllContratPath = '/gmssc/api/v1/contrats/all';
  static readonly deleteBienByIdPath = '/gmssc/api/v1/contrats/delete/{Idcontrats}';
  static readonly saveContratPath = '/gmssc/api/v1/contrats/savecontrat';
  static readonly getContratByIDPath = '/gmssc/api/v1/contrats/{IdContrat}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getAllContratResponse(): __Observable<__StrictHttpResponse<Array<ContratDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/contrats/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ContratDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllContrat(): __Observable<Array<ContratDto>> {
    return this.getAllContratResponse().pipe(
      __map(_r => _r.body as Array<ContratDto>)
    );
  }

  /**
   * @param Idcontrats undefined
   * @return successful operation
   */
  deleteBienByIdResponse(Idcontrats: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gmssc/api/v1/contrats/delete/${Idcontrats}`,
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
   * @param Idcontrats undefined
   * @return successful operation
   */
  deleteBienById(Idcontrats: number): __Observable<boolean> {
    return this.deleteBienByIdResponse(Idcontrats).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveContratResponse(body?: ContratDto): __Observable<__StrictHttpResponse<ContratDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/contrats/savecontrat`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContratDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveContrat(body?: ContratDto): __Observable<ContratDto> {
    return this.saveContratResponse(body).pipe(
      __map(_r => _r.body as ContratDto)
    );
  }

  /**
   * @param IdContrat undefined
   * @return successful operation
   */
  getContratByIDResponse(IdContrat: number): __Observable<__StrictHttpResponse<ContratDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/contrats/${IdContrat}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContratDto>;
      })
    );
  }
  /**
   * @param IdContrat undefined
   * @return successful operation
   */
  getContratByID(IdContrat: number): __Observable<ContratDto> {
    return this.getContratByIDResponse(IdContrat).pipe(
      __map(_r => _r.body as ContratDto)
    );
  }
}

module Gmsscapiv1contratsService {
}

export { Gmsscapiv1contratsService }
