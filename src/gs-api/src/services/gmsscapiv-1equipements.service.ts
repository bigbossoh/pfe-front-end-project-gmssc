/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EquipementDto } from '../models/equipement-dto';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1equipementsService extends __BaseService {
  static readonly getListeDesEquipementsPath = '/gmssc/api/v1/equipements/all';
  static readonly deleteEquipementByIdPath = '/gmssc/api/v1/equipements/delete/{idEquipement}';
  static readonly getPieceByIDPath = '/gmssc/api/v1/equipements/getPiece/{CodeEquipement}';
  static readonly savePiecePath = '/gmssc/api/v1/equipements/saveEquipement';
  static readonly getEquipementByIDPath = '/gmssc/api/v1/equipements/{IdEquipement}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getListeDesEquipementsResponse(): __Observable<__StrictHttpResponse<Array<EquipementDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/equipements/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EquipementDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getListeDesEquipements(): __Observable<Array<EquipementDto>> {
    return this.getListeDesEquipementsResponse().pipe(
      __map(_r => _r.body as Array<EquipementDto>)
    );
  }

  /**
   * @param idEquipement undefined
   * @return successful operation
   */
  deleteEquipementByIdResponse(idEquipement: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gmssc/api/v1/equipements/delete/${idEquipement}`,
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
   * @param idEquipement undefined
   * @return successful operation
   */
  deleteEquipementById(idEquipement: number): __Observable<boolean> {
    return this.deleteEquipementByIdResponse(idEquipement).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param CodeEquipement undefined
   * @return successful operation
   */
  getPieceByIDResponse(CodeEquipement: string): __Observable<__StrictHttpResponse<EquipementDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/equipements/getPiece/${CodeEquipement}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EquipementDto>;
      })
    );
  }
  /**
   * @param CodeEquipement undefined
   * @return successful operation
   */
  getPieceByID(CodeEquipement: string): __Observable<EquipementDto> {
    return this.getPieceByIDResponse(CodeEquipement).pipe(
      __map(_r => _r.body as EquipementDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  savePieceResponse(body?: EquipementDto): __Observable<__StrictHttpResponse<EquipementDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/equipements/saveEquipement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EquipementDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  savePiece(body?: EquipementDto): __Observable<EquipementDto> {
    return this.savePieceResponse(body).pipe(
      __map(_r => _r.body as EquipementDto)
    );
  }

  /**
   * @param IdEquipement undefined
   * @return successful operation
   */
  getEquipementByIDResponse(IdEquipement: number): __Observable<__StrictHttpResponse<EquipementDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/equipements/${IdEquipement}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EquipementDto>;
      })
    );
  }
  /**
   * @param IdEquipement undefined
   * @return successful operation
   */
  getEquipementByID(IdEquipement: number): __Observable<EquipementDto> {
    return this.getEquipementByIDResponse(IdEquipement).pipe(
      __map(_r => _r.body as EquipementDto)
    );
  }
}

module Gmsscapiv1equipementsService {
}

export { Gmsscapiv1equipementsService }
