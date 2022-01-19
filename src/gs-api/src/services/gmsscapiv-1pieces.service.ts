/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PiecesDto } from '../models/pieces-dto';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1piecesService extends __BaseService {
  static readonly getListeDesPiecesPath = '/gmssc/api/v1/pieces/all';
  static readonly listPiecesByBienImmoIdPath = '/gmssc/api/v1/pieces/allPiecesByBien/{idPiece}';
  static readonly deletePieceByIdPath = '/gmssc/api/v1/pieces/delete/{idPiece}';
  static readonly getPieceByCodePiecePath = '/gmssc/api/v1/pieces/getPiece/{CodePiece}';
  static readonly savePiecePath = '/gmssc/api/v1/pieces/savepiece';
  static readonly getPieceByIDPath = '/gmssc/api/v1/pieces/{IdPiece}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getListeDesPiecesResponse(): __Observable<__StrictHttpResponse<Array<PiecesDto>>> {
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
        return _r as __StrictHttpResponse<Array<PiecesDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getListeDesPieces(): __Observable<Array<PiecesDto>> {
    return this.getListeDesPiecesResponse().pipe(
      __map(_r => _r.body as Array<PiecesDto>)
    );
  }

  /**
   * @param idPiece undefined
   * @return successful operation
   */
  listPiecesByBienImmoIdResponse(idPiece: number): __Observable<__StrictHttpResponse<Array<PiecesDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/pieces/allPiecesByBien/${idPiece}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PiecesDto>>;
      })
    );
  }
  /**
   * @param idPiece undefined
   * @return successful operation
   */
  listPiecesByBienImmoId(idPiece: number): __Observable<Array<PiecesDto>> {
    return this.listPiecesByBienImmoIdResponse(idPiece).pipe(
      __map(_r => _r.body as Array<PiecesDto>)
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
  getPieceByCodePieceResponse(CodePiece: string): __Observable<__StrictHttpResponse<PiecesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/pieces/getPiece/${CodePiece}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PiecesDto>;
      })
    );
  }
  /**
   * @param CodePiece undefined
   * @return successful operation
   */
  getPieceByCodePiece(CodePiece: string): __Observable<PiecesDto> {
    return this.getPieceByCodePieceResponse(CodePiece).pipe(
      __map(_r => _r.body as PiecesDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  savePieceResponse(body?: PiecesDto): __Observable<__StrictHttpResponse<PiecesDto>> {
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
        return _r as __StrictHttpResponse<PiecesDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  savePiece(body?: PiecesDto): __Observable<PiecesDto> {
    return this.savePieceResponse(body).pipe(
      __map(_r => _r.body as PiecesDto)
    );
  }

  /**
   * @param IdPiece undefined
   * @return successful operation
   */
  getPieceByIDResponse(IdPiece: number): __Observable<__StrictHttpResponse<PiecesDto>> {
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
        return _r as __StrictHttpResponse<PiecesDto>;
      })
    );
  }
  /**
   * @param IdPiece undefined
   * @return successful operation
   */
  getPieceByID(IdPiece: number): __Observable<PiecesDto> {
    return this.getPieceByIDResponse(IdPiece).pipe(
      __map(_r => _r.body as PiecesDto)
    );
  }
}

module Gmsscapiv1piecesService {
}

export { Gmsscapiv1piecesService }
