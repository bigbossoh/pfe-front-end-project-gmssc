/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CompetenceDto } from '../models/competence-dto';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1CompetencesService extends __BaseService {
  static readonly getAllCompetencePath = '/gmssc/api/v1/competences/all';
  static readonly deleteCompetencesByIdPath = '/gmssc/api/v1/competences/delete/{IdCompetences}';
  static readonly saveCompetencePath = '/gmssc/api/v1/competences/savecompetences';
  static readonly getCompetenceByIDPath = '/gmssc/api/v1/competences/{IdCompetences}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getAllCompetenceResponse(): __Observable<__StrictHttpResponse<Array<CompetenceDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/competences/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CompetenceDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllCompetence(): __Observable<Array<CompetenceDto>> {
    return this.getAllCompetenceResponse().pipe(
      __map(_r => _r.body as Array<CompetenceDto>)
    );
  }

  /**
   * @param IdCompetences undefined
   * @return successful operation
   */
  deleteCompetencesByIdResponse(IdCompetences: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gmssc/api/v1/competences/delete/${IdCompetences}`,
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
   * @param IdCompetences undefined
   * @return successful operation
   */
  deleteCompetencesById(IdCompetences: number): __Observable<boolean> {
    return this.deleteCompetencesByIdResponse(IdCompetences).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveCompetenceResponse(body?: CompetenceDto): __Observable<__StrictHttpResponse<CompetenceDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/competences/savecompetences`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CompetenceDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveCompetence(body?: CompetenceDto): __Observable<CompetenceDto> {
    return this.saveCompetenceResponse(body).pipe(
      __map(_r => _r.body as CompetenceDto)
    );
  }

  /**
   * @param IdCompetences undefined
   * @return successful operation
   */
  getCompetenceByIDResponse(IdCompetences: number): __Observable<__StrictHttpResponse<CompetenceDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/competences/${IdCompetences}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CompetenceDto>;
      })
    );
  }
  /**
   * @param IdCompetences undefined
   * @return successful operation
   */
  getCompetenceByID(IdCompetences: number): __Observable<CompetenceDto> {
    return this.getCompetenceByIDResponse(IdCompetences).pipe(
      __map(_r => _r.body as CompetenceDto)
    );
  }
}

module Gmsscapiv1CompetencesService {
}

export { Gmsscapiv1CompetencesService }
