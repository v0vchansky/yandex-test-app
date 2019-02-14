// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetService {

  constructor(private http: HttpClient) {}

  get(): any {
    return this.http
      .get('../../assets/storage/flights.json');
  }
}
