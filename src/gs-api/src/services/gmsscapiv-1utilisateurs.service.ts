/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UtilisateurDto } from '../models/utilisateur-dto';
import { ChangerMotDePasseUtilisateurDto } from '../models/changer-mot-de-passe-utilisateur-dto';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1utilisateursService extends __BaseService {
  static readonly getUtilisateurByEmailPath = '/gmssc/api/v1/utilisateur/{email}';
  static readonly getListeDesUtilisateursPath = '/gmssc/api/v1/utilisateurs/all';
  static readonly savePath = '/gmssc/api/v1/utilisateurs/create';
  static readonly deleteUtilisateurPath = '/gmssc/api/v1/utilisateurs/delete/{IdUser}';
  static readonly changerMotDePassePath = '/gmssc/api/v1/utilisateurs/update/password';
  static readonly getUtilisateurByIDPath = '/gmssc/api/v1/utilisateurs/{IdUser}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param email undefined
   * @return successful operation
   */
  getUtilisateurByEmailResponse(email: string): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/utilisateur/${email}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param email undefined
   * @return successful operation
   */
  getUtilisateurByEmail(email: string): __Observable<UtilisateurDto> {
    return this.getUtilisateurByEmailResponse(email).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @return successful operation
   */
  getListeDesUtilisateursResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/utilisateurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getListeDesUtilisateurs(): __Observable<Array<UtilisateurDto>> {
    return this.getListeDesUtilisateursResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: UtilisateurDto): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/utilisateurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: UtilisateurDto): __Observable<UtilisateurDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param IdUser undefined
   */
  deleteUtilisateurResponse(IdUser: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gmssc/api/v1/utilisateurs/delete/${IdUser}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param IdUser undefined
   */
  deleteUtilisateur(IdUser: number): __Observable<null> {
    return this.deleteUtilisateurResponse(IdUser).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  changerMotDePasseResponse(body?: ChangerMotDePasseUtilisateurDto): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/utilisateurs/update/password`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  changerMotDePasse(body?: ChangerMotDePasseUtilisateurDto): __Observable<UtilisateurDto> {
    return this.changerMotDePasseResponse(body).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param IdUser undefined
   * @return successful operation
   */
  getUtilisateurByIDResponse(IdUser: number): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/utilisateurs/${IdUser}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param IdUser undefined
   * @return successful operation
   */
  getUtilisateurByID(IdUser: number): __Observable<UtilisateurDto> {
    return this.getUtilisateurByIDResponse(IdUser).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }
}

module Gmsscapiv1utilisateursService {
}

export { Gmsscapiv1utilisateursService }
