/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Pieces } from '../models/pieces';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1piecesService extends __BaseService {
  static readonly getListeDesPiecesPath = '/gmssc/api/v1/pieces/all';
  static readonly deletePieceByIdPath = '/gmssc/api/v1/pieces/delete/{idPiece}';
  static readonly getPieceByIDPath = '/gmssc/api/v1/pieces/getPiece/{codebien}';
  static readonly savePiecePath = '/gmssc/api/v1/pieces/savepiece';
  static readonly updatingSocietePath = '/gmssc/api/v1/pieces/update';
  static readonly getPieceByID_1Path = '/gmssc/api/v1/pieces/{IdPiece}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getListeDesPiecesResponse(): __Observable<__StrictHttpResponse<Array<Pieces>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/pieces/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Pieces>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getListeDesPieces(): __Observable<Array<Pieces>> {
    return this.getListeDesPiecesResponse().pipe(
      __map(_r => _r.body as Array<Pieces>)
    );
  }

  /**
   * @param idPiece undefined
   * @return successful operation
   */
  deletePieceByIdResponse(idPiece: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gmssc/api/v1/pieces/delete/${idPiece}`,
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
   * @param idPiece undefined
   * @return successful operation
   */
  deletePieceById(idPiece: number): __Observable<boolean> {
    return this.deletePieceByIdResponse(idPiece).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param CodePiece undefined
   * @return successful operation
   */
  getPieceByIDResponse(CodePiece: string): __Observable<__StrictHttpResponse<Pieces>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/pieces/getPiece/${codebien}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Pieces>;
      })
    );
  }
  /**
   * @param CodePiece undefined
   * @return successful operation
   */
  getPieceByID(CodePiece: string): __Observable<Pieces> {
    return this.getPieceByIDResponse(CodePiece).pipe(
      __map(_r => _r.body as Pieces)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  savePieceResponse(body?: Pieces): __Observable<__StrictHttpResponse<Pieces>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/pieces/savepiece`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Pieces>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  savePiece(body?: Pieces): __Observable<Pieces> {
    return this.savePieceResponse(body).pipe(
      __map(_r => _r.body as Pieces)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  updatingSocieteResponse(body?: Pieces): __Observable<__StrictHttpResponse<Pieces>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/gmssc/api/v1/pieces/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Pieces>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  updatingSociete(body?: Pieces): __Observable<Pieces> {
    return this.updatingSocieteResponse(body).pipe(
      __map(_r => _r.body as Pieces)
    );
  }

  /**
   * @param IdPiece undefined
   * @return successful operation
   */
  getPieceByID_1Response(IdPiece: number): __Observable<__StrictHttpResponse<Pieces>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/pieces/${IdPiece}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Pieces>;
      })
    );
  }
  /**
   * @param IdPiece undefined
   * @return successful operation
   */
  getPieceByID_1(IdPiece: number): __Observable<Pieces> {
    return this.getPieceByID_1Response(IdPiece).pipe(
      __map(_r => _r.body as Pieces)
    );
  }
}

module Gmsscapiv1piecesService {
}

export { Gmsscapiv1piecesService }
