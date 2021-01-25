import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {config} from '../config/api.config';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  url = `${config.apiBaseUrl}/picture`;

  constructor(private http: HttpClient) {
  }

  upload(galleryId: string, file: File): Observable<Picture> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<Picture>(this.url + '/' + galleryId, formData);
  }

  getAll(galleryId: string): Observable<Picture[]> {
    return this.http.get<Picture[]>(this.url + '/' + galleryId);
  }

  getOne(galleryId: string, pictureId: string): Observable<Picture> {
    return this.http.get<Picture>(`${this.url}/${galleryId}/${pictureId}`);
  }

}

export interface Picture {
  id: string;
  numberOfView: string;
  galleryId: string;
  filename: string;
  fileSize: string;
  memo: string;
  pictureBinary: string;
  uploadTime: string;
}
