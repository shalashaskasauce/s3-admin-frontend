import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class S3Service {
  private apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getBuckets(): Observable<string> {
    return this.httpClient.get<string>(`${this.apiUrl}/listBuckets`)
  }
}
