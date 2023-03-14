import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {

  constructor(private http: HttpClient) { }

  fetchPrinters(page: number, size: number, sortBy: string, sortDir: string) {
    return this.http.get(API_URL + '/printers');
  }
}
