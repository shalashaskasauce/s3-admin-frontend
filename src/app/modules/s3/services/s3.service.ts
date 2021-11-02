import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Bucket } from '../interfaces/bucket.interface';
import { S3Object } from '../interfaces/s3object.interface';

@Injectable({
  providedIn: 'root'
})
export class S3Service {
  private apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getBuckets(): Observable<Bucket[]> {
    return this.httpClient.get<Bucket[]>(`${this.apiUrl}/buckets`);
  }

  getObjects(bucket: string, prefix = ''): Observable<S3Object[]> {
    return this.httpClient.get<S3Object[]>(`${this.apiUrl}/objects/${bucket}?prefix=${prefix}`);
  }

  getObject(bucket: string, key: string) {
    // blob as json - really stupid hack as we need "blob" but Angular type is json | undefined
    return this.httpClient.get<string>(`${this.apiUrl}/object/${bucket}?key=${key}`, { responseType: 'blob' as 'json' });
  }
}
