/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IntervenantGroupeIntervenantDto } from '../models/intervenant-groupe-intervenant-dto';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1utilisateurGroupeIntervenantService extends __BaseService {
  static readonly deleteUtilisateurGroupeIntervenantByIdPath = '/gmssc/api/v1/UtilisateurGroupeIntervenant/delete/{IduserGrpeInterv}';
  static readonly getAllUtilisateurGroupeIntervenantPath = '/gmssc/api/v1/utilisateurGroupeIntervenant/all';
  static readonly getlistOfUtilisateurGroupeIntervenantByGroupeIntervenantPath = '/gmssc/api/v1/utilisateurGroupeIntervenant/allparGroupeIntervenant/{IduserGrpeInterv}';
  static readonly saveUtilisateurGroupeIntervenantPath = '/gmssc/api/v1/utilisateurGroupeIntervenant/saveusergroupeintervenant';
  static readonly getUtilisateurGroupeIntervenantByIDPath = '/gmssc/api/v1/utilisateurGroupeIntervenant/{IduserGrpeInterv}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param IduserGrpeInterv undefined
   * @return successful operation
   */
  deleteUtilisateurGroupeIntervenantByIdResponse(IduserGrpeInterv: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gmssc/api/v1/UtilisateurGroupeIntervenant/delete/${IduserGrpeInterv}`,
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
   * @param IduserGrpeInterv undefined
   * @return successful operation
   */
  deleteUtilisateurGroupeIntervenantById(IduserGrpeInterv: number): __Observable<boolean> {
    return this.deleteUtilisateurGroupeIntervenantByIdResponse(IduserGrpeInterv).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @return successful operation
   */
  getAllUtilisateurGroupeIntervenantResponse(): __Observable<__StrictHttpResponse<Array<IntervenantGroupeIntervenantDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/utilisateurGroupeIntervenant/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<IntervenantGroupeIntervenantDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllUtilisateurGroupeIntervenant(): __Observable<Array<IntervenantGroupeIntervenantDto>> {
    return this.getAllUtilisateurGroupeIntervenantResponse().pipe(
      __map(_r => _r.body as Array<IntervenantGroupeIntervenantDto>)
    );
  }

  /**
   * @param IduserGrpeInterv undefined
   * @return successful operation
   */
  getlistOfUtilisateurGroupeIntervenantByGroupeIntervenantResponse(IduserGrpeInterv: number): __Observable<__StrictHttpResponse<Array<IntervenantGroupeIntervenantDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/utilisateurGroupeIntervenant/allparGroupeIntervenant/${IduserGrpeInterv}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<IntervenantGroupeIntervenantDto>>;
      })
    );
  }
  /**
   * @param IduserGrpeInterv undefined
   * @return successful operation
   */
  getlistOfUtilisateurGroupeIntervenantByGroupeIntervenant(IduserGrpeInterv: number): __Observable<Array<IntervenantGroupeIntervenantDto>> {
    return this.getlistOfUtilisateurGroupeIntervenantByGroupeIntervenantResponse(IduserGrpeInterv).pipe(
      __map(_r => _r.body as Array<IntervenantGroupeIntervenantDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveUtilisateurGroupeIntervenantResponse(body?: IntervenantGroupeIntervenantDto): __Observable<__StrictHttpResponse<IntervenantGroupeIntervenantDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/utilisateurGroupeIntervenant/saveusergroupeintervenant`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IntervenantGroupeIntervenantDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveUtilisateurGroupeIntervenant(body?: IntervenantGroupeIntervenantDto): __Observable<IntervenantGroupeIntervenantDto> {
    return this.saveUtilisateurGroupeIntervenantResponse(body).pipe(
      __map(_r => _r.body as IntervenantGroupeIntervenantDto)
    );
  }

  /**
   * @param IduserGrpeInterv undefined
   * @return successful operation
   */
  getUtilisateurGroupeIntervenantByIDResponse(IduserGrpeInterv: number): __Observable<__StrictHttpResponse<IntervenantGroupeIntervenantDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/utilisateurGroupeIntervenant/${IduserGrpeInterv}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IntervenantGroupeIntervenantDto>;
      })
    );
  }
  /**
   * @param IduserGrpeInterv undefined
   * @return successful operation
   */
  getUtilisateurGroupeIntervenantByID(IduserGrpeInterv: number): __Observable<IntervenantGroupeIntervenantDto> {
    return this.getUtilisateurGroupeIntervenantByIDResponse(IduserGrpeInterv).pipe(
      __map(_r => _r.body as IntervenantGroupeIntervenantDto)
    );
  }
}

module Gmsscapiv1utilisateurGroupeIntervenantService {
}

export { Gmsscapiv1utilisateurGroupeIntervenantService }
