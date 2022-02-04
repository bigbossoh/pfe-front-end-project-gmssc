/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TodoMaintenanceDto } from '../models/todo-maintenance-dto';
@Injectable({
  providedIn: 'root',
})
class Gmsscapiv1actionsService extends __BaseService {
  static readonly getAllActionsPath = '/gmssc/api/v1/actions/all';
  static readonly getAllActionsOrderedPath = '/gmssc/api/v1/actions/allOrdered';
  static readonly deleteActiobByIdPath = '/gmssc/api/v1/actions/delete/{Idaction}';
  static readonly saveActionPath = '/gmssc/api/v1/actions/saveaction';
  static readonly getActionByIDPath = '/gmssc/api/v1/actions/{Idaction}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getAllActionsResponse(): __Observable<__StrictHttpResponse<Array<TodoMaintenanceDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/actions/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TodoMaintenanceDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllActions(): __Observable<Array<TodoMaintenanceDto>> {
    return this.getAllActionsResponse().pipe(
      __map(_r => _r.body as Array<TodoMaintenanceDto>)
    );
  }

  /**
   * @return successful operation
   */
  getAllActionsOrderedResponse(): __Observable<__StrictHttpResponse<Array<TodoMaintenanceDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/actions/allOrdered`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TodoMaintenanceDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllActionsOrdered(): __Observable<Array<TodoMaintenanceDto>> {
    return this.getAllActionsOrderedResponse().pipe(
      __map(_r => _r.body as Array<TodoMaintenanceDto>)
    );
  }

  /**
   * @param Idaction undefined
   * @return successful operation
   */
  deleteActiobByIdResponse(Idaction: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gmssc/api/v1/actions/delete/${Idaction}`,
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
   * @param Idaction undefined
   * @return successful operation
   */
  deleteActiobById(Idaction: number): __Observable<boolean> {
    return this.deleteActiobByIdResponse(Idaction).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveActionResponse(body?: TodoMaintenanceDto): __Observable<__StrictHttpResponse<TodoMaintenanceDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gmssc/api/v1/actions/saveaction`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TodoMaintenanceDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveAction(body?: TodoMaintenanceDto): __Observable<TodoMaintenanceDto> {
    return this.saveActionResponse(body).pipe(
      __map(_r => _r.body as TodoMaintenanceDto)
    );
  }

  /**
   * @param Idaction undefined
   * @return successful operation
   */
  getActionByIDResponse(Idaction: number): __Observable<__StrictHttpResponse<TodoMaintenanceDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gmssc/api/v1/actions/${Idaction}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TodoMaintenanceDto>;
      })
    );
  }
  /**
   * @param Idaction undefined
   * @return successful operation
   */
  getActionByID(Idaction: number): __Observable<TodoMaintenanceDto> {
    return this.getActionByIDResponse(Idaction).pipe(
      __map(_r => _r.body as TodoMaintenanceDto)
    );
  }
}

module Gmsscapiv1actionsService {
}

export { Gmsscapiv1actionsService }
