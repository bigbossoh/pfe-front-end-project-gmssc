/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PieceEquipement } from '../models/piece-equipement';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1PieceEquipementsService extends __BaseService {
  static readonly getAllPieceEquipementPath = '/gmssc/api/v1/PieceEquipements/all';
  static readonly deletePieceEquipementByIdPath = '/gmssc/api/v1/PieceEquipements/delete/{IdBien}';
  static readonly savePieceEquipementPath = '/gmssc/api/v1/PieceEquipements/savePieceEquipement';
  static readonly updatingPieceEquipementPath = '/gmssc/api/v1/PieceEquipements/update';
  static readonly getPieceEquipementByIDPath = '/gmssc/api/v1/PieceEquipements/{IdPieceEqpt}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getAllPieceEquipementResponse(): __Observable<__StrictHttpResponse<Array<PieceEquipement>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/PieceEquipements/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PieceEquipement>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllPieceEquipement(): __Observable<Array<PieceEquipement>> {
    return this.getAllPieceEquipementResponse().pipe(
      __map(_r => _r.body as Array<PieceEquipement>)
    );
  }

  /**
   * @param IdPieceEqpt undefined
   * @return successful operation
   */
  deletePieceEquipementByIdResponse(IdPieceEqpt: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gmssc/api/v1/PieceEquipements/delete/${IdBien}`,
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
   * @param IdPieceEqpt undefined
   * @return successful operation
   */
  deletePieceEquipementById(IdPieceEqpt: number): __Observable<boolean> {
    return this.deletePieceEquipementByIdResponse(IdPieceEqpt).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  savePieceEquipementResponse(body?: PieceEquipement): __Observable<__StrictHttpResponse<PieceEquipement>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/PieceEquipements/savePieceEquipement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PieceEquipement>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  savePieceEquipement(body?: PieceEquipement): __Observable<PieceEquipement> {
    return this.savePieceEquipementResponse(body).pipe(
      __map(_r => _r.body as PieceEquipement)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  updatingPieceEquipementResponse(body?: PieceEquipement): __Observable<__StrictHttpResponse<PieceEquipement>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/gmssc/api/v1/PieceEquipements/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PieceEquipement>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  updatingPieceEquipement(body?: PieceEquipement): __Observable<PieceEquipement> {
    return this.updatingPieceEquipementResponse(body).pipe(
      __map(_r => _r.body as PieceEquipement)
    );
  }

  /**
   * @param IdPieceEqpt undefined
   * @return successful operation
   */
  getPieceEquipementByIDResponse(IdPieceEqpt: number): __Observable<__StrictHttpResponse<PieceEquipement>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/PieceEquipements/${IdPieceEqpt}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PieceEquipement>;
      })
    );
  }
  /**
   * @param IdPieceEqpt undefined
   * @return successful operation
   */
  getPieceEquipementByID(IdPieceEqpt: number): __Observable<PieceEquipement> {
    return this.getPieceEquipementByIDResponse(IdPieceEqpt).pipe(
      __map(_r => _r.body as PieceEquipement)
    );
  }
}

module Gmsscapiv1PieceEquipementsService {
}

export { Gmsscapiv1PieceEquipementsService }
