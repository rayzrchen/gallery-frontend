import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {config} from '../config/api.config';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  url = `${config.apiBaseUrl}/gallery`;

  constructor(private http: HttpClient) {
  }

  create(gallery: Gallery): Observable<Gallery> {
    return this.http.post<Gallery>(this.url, gallery);
  }

  getAll(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(this.url);
  }


}

export interface Gallery {
  id: string;
  username: string;
  createTime: number;
  title: string;
  numberOfView: number;
  description: string;
}
