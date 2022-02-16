import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Articles } from "../interfaces/articles";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private readonly httpClient: HttpClient) { }

  public getArticles(): Observable<Articles[]> {
    return this.httpClient.get<Articles[]>(`${environment.api}/articles`)
  }
}
