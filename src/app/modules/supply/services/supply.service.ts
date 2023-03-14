import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  constructor(private http: HttpClient) { }

  fetchSupplies(page: number, size: number, sortBy: string, sortDir: string) {
    return this.http.get(API_URL + '/supplies');
  }

}