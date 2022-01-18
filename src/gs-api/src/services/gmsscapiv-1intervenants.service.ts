/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IntervenantDto } from '../models/intervenant-dto';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1intervenantsService extends __BaseService {
  static readonly getAllIntervenantsPath = '/gmssc/api/v1/intervenants/all';
  static readonly listOfIntervenantsBySocieteIdPath = '/gmssc/api/v1/intervenants/allbysociete/{IdSociete}';
  static readonly deleteIntervenantByIdPath = '/gmssc/api/v1/intervenants/delete/{IdInterv}';
  static readonly saveIntervenantPath = '/gmssc/api/v1/intervenants/saveIntervenant';
  static readonly getIntervenantByIDPath = '/gmssc/api/v1/intervenants/{IdInterv}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getAllIntervenantsResponse(): __Observable<__StrictHttpResponse<Array<IntervenantDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/intervenants/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<IntervenantDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllIntervenants(): __Observable<Array<IntervenantDto>> {
    return this.getAllIntervenantsResponse().pipe(
      __map(_r => _r.body as Array<IntervenantDto>)
    );
  }

  /**
   * @param IdSociete undefined
   * @return successful operation
   */
  listOfIntervenantsBySocieteIdResponse(IdSociete: number): __Observable<__StrictHttpResponse<Array<IntervenantDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/intervenants/allbysociete/${IdSociete}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<IntervenantDto>>;
      })
    );
  }
  /**
   * @param IdSociete undefined
   * @return successful operation
   */
  listOfIntervenantsBySocieteId(IdSociete: number): __Observable<Array<IntervenantDto>> {
    return this.listOfIntervenantsBySocieteIdResponse(IdSociete).pipe(
      __map(_r => _r.body as Array<IntervenantDto>)
    );
  }

  /**
   * @param IdInterv undefined
   * @return successful operation
   */
  deleteIntervenantByIdResponse(IdInterv: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gmssc/api/v1/intervenants/delete/${IdInterv}`,
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
   * @param IdInterv undefined
   * @return successful operation
   */
  deleteIntervenantById(IdInterv: number): __Observable<boolean> {
    return this.deleteIntervenantByIdResponse(IdInterv).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveIntervenantResponse(body?: IntervenantDto): __Observable<__StrictHttpResponse<IntervenantDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/intervenants/saveIntervenant`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IntervenantDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveIntervenant(body?: IntervenantDto): __Observable<IntervenantDto> {
    return this.saveIntervenantResponse(body).pipe(
      __map(_r => _r.body as IntervenantDto)
    );
  }

  /**
   * @param IdInterv undefined
   * @return successful operation
   */
  getIntervenantByIDResponse(IdInterv: number): __Observable<__StrictHttpResponse<IntervenantDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/intervenants/${IdInterv}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IntervenantDto>;
      })
    );
  }
  /**
   * @param IdInterv undefined
   * @return successful operation
   */
  getIntervenantByID(IdInterv: number): __Observable<IntervenantDto> {
    return this.getIntervenantByIDResponse(IdInterv).pipe(
      __map(_r => _r.body as IntervenantDto)
    );
  }
}

module Gmsscapiv1intervenantsService {
}

export { Gmsscapiv1intervenantsService }
