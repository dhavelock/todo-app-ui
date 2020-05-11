import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getLists() {
    return this.http.get(`${this.baseUrl}/list`);
  }

  getList(id: number) {
    return this.http.get(`${this.baseUrl}/list/${id}`);
  }

  getItems() {
    return this.http.get(`${this.baseUrl}/item`);
  }

  getItem(id: number) {
    return this.http.get(`${this.baseUrl}/item/${id}`);
  }

  getUrl(url: string) {
    return this.http.get(url);
  }

  postItem(data) {
    return this.http.post(`${this.baseUrl}/item`, data);
  }

  postList(data) {
    return this.http.post(`${this.baseUrl}/list`, data);
  }

  deleteUrl(url: string) {
    return this.http.delete(url);
  }
}
