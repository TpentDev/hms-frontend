import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PrinterRequestData } from "../../interfaces/printerRequestData.interface";

const API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {

  constructor(private http: HttpClient) { }

  fetchPrinters(page: number, size: number, sortBy: string, sortDir: string) {
    return this.http.get(API_URL + 'printers');
  }

  createPrinter(printerData: PrinterRequestData): Observable<PrinterRequestData> {
    return this.http.post<PrinterRequestData>(API_URL + 'create/', printerData);
  }

  updatePrinter(printId: number, printerData: PrinterRequestData): Observable<any> {
    return this.http.put(API_URL + 'update/' + printId, printerData);
  }

}