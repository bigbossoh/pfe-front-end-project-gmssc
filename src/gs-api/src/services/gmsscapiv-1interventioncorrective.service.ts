/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CorrectiveDto } from '../models/corrective-dto';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1interventioncorrectiveService extends __BaseService {
  static readonly getAllCorrectivePath = '/gmssc/api/v1/intervention/corrective/all';
  static readonly deleteCorrectiveByIdPath = '/gmssc/api/v1/intervention/corrective/delete/{IdCorrective}';
  static readonly saveCorrectivePath = '/gmssc/api/v1/intervention/corrective/savecorrective';
  static readonly getCorrectiveByIDPath = '/gmssc/api/v1/intervention/corrective/{IdCorrective}';
  static readonly getAllCorrectiveByGrpeIntervPath = '/gmssc/api/v1/intervention/correctivebygrpeinterv/all/{IdCorrective}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getAllCorrectiveResponse(): __Observable<__StrictHttpResponse<Array<CorrectiveDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/intervention/corrective/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CorrectiveDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllCorrective(): __Observable<Array<CorrectiveDto>> {
    return this.getAllCorrectiveResponse().pipe(
      __map(_r => _r.body as Array<CorrectiveDto>)
    );
  }

  /**
   * @param IdCorrective undefined
   * @return successful operation
   */
  deleteCorrectiveByIdResponse(IdCorrective: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gmssc/api/v1/intervention/corrective/delete/${IdCorrective}`,
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
   * @param IdCorrective undefined
   * @return successful operation
   */
  deleteCorrectiveById(IdCorrective: number): __Observable<boolean> {
    return this.deleteCorrectiveByIdResponse(IdCorrective).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveCorrectiveResponse(body?: CorrectiveDto): __Observable<__StrictHttpResponse<CorrectiveDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/intervention/corrective/savecorrective`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CorrectiveDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveCorrective(body?: CorrectiveDto): __Observable<CorrectiveDto> {
    return this.saveCorrectiveResponse(body).pipe(
      __map(_r => _r.body as CorrectiveDto)
    );
  }

  /**
   * @param IdCorrective undefined
   * @return successful operation
   */
  getCorrectiveByIDResponse(IdCorrective: number): __Observable<__StrictHttpResponse<CorrectiveDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/intervention/corrective/${IdCorrective}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CorrectiveDto>;
      })
    );
  }
  /**
   * @param IdCorrective undefined
   * @return successful operation
   */
  getCorrectiveByID(IdCorrective: number): __Observable<CorrectiveDto> {
    return this.getCorrectiveByIDResponse(IdCorrective).pipe(
      __map(_r => _r.body as CorrectiveDto)
    );
  }

  /**
   * @param IdCorrective undefined
   * @return successful operation
   */
  getAllCorrectiveByGrpeIntervResponse(IdCorrective: number): __Observable<__StrictHttpResponse<Array<CorrectiveDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/intervention/correctivebygrpeinterv/all/${IdCorrective}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CorrectiveDto>>;
      })
    );
  }
  /**
   * @param IdCorrective undefined
   * @return successful operation
   */
  getAllCorrectiveByGrpeInterv(IdCorrective: number): __Observable<Array<CorrectiveDto>> {
    return this.getAllCorrectiveByGrpeIntervResponse(IdCorrective).pipe(
      __map(_r => _r.body as Array<CorrectiveDto>)
    );
  }
}

module Gmsscapiv1interventioncorrectiveService {
}

export { Gmsscapiv1interventioncorrectiveService }
