/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { GroupeIntervenantDto } from '../models/groupe-intervenant-dto';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1groupeIntervenantService extends __BaseService {
  static readonly getGroupeIntervenantPath = '/gmssc/api/v1/groupe-intervenant/all';
  static readonly deleteGroupeIntervenantByIdPath = '/gmssc/api/v1/groupe-intervenant/delete/{IdgrpInterv}';
  static readonly saveGroupeIntervenantPath = '/gmssc/api/v1/groupe-intervenant/savegrpeIntervenant';
  static readonly getSignalerPanneDtoPath = '/gmssc/api/v1/groupe-intervenant/{IdgrpInterv}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getGroupeIntervenantResponse(): __Observable<__StrictHttpResponse<Array<GroupeIntervenantDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/groupe-intervenant/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GroupeIntervenantDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getGroupeIntervenant(): __Observable<Array<GroupeIntervenantDto>> {
    return this.getGroupeIntervenantResponse().pipe(
      __map(_r => _r.body as Array<GroupeIntervenantDto>)
    );
  }

  /**
   * @param IdgrpInterv undefined
   * @return successful operation
   */
  deleteGroupeIntervenantByIdResponse(IdgrpInterv: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gmssc/api/v1/groupe-intervenant/delete/${IdgrpInterv}`,
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
   * @param IdgrpInterv undefined
   * @return successful operation
   */
  deleteGroupeIntervenantById(IdgrpInterv: number): __Observable<boolean> {
    return this.deleteGroupeIntervenantByIdResponse(IdgrpInterv).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveGroupeIntervenantResponse(body?: GroupeIntervenantDto): __Observable<__StrictHttpResponse<GroupeIntervenantDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/groupe-intervenant/savegrpeIntervenant`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupeIntervenantDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveGroupeIntervenant(body?: GroupeIntervenantDto): __Observable<GroupeIntervenantDto> {
    return this.saveGroupeIntervenantResponse(body).pipe(
      __map(_r => _r.body as GroupeIntervenantDto)
    );
  }

  /**
   * @param IdgrpInterv undefined
   * @return successful operation
   */
  getSignalerPanneDtoResponse(IdgrpInterv: number): __Observable<__StrictHttpResponse<GroupeIntervenantDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/groupe-intervenant/${IdgrpInterv}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupeIntervenantDto>;
      })
    );
  }
  /**
   * @param IdgrpInterv undefined
   * @return successful operation
   */
  getSignalerPanneDto(IdgrpInterv: number): __Observable<GroupeIntervenantDto> {
    return this.getSignalerPanneDtoResponse(IdgrpInterv).pipe(
      __map(_r => _r.body as GroupeIntervenantDto)
    );
  }
}

module Gmsscapiv1groupeIntervenantService {
}

export { Gmsscapiv1groupeIntervenantService }
