import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PrinterDialogData } from '../../../interfaces/printerDialogData.interface';
import { Printer } from '../../../models/printer.model';
import { PrinterDialogService } from '../../../services/printer-dialog/printer-dialog.service';
import { PrinterService } from '../../../services/printer/printer.service';

const ELEMENT_DATA: Printer[] = [];

@Component({
  selector: 'app-printer-list',
  templateUrl: './printer-list.component.html',
  styleUrls: ['./printer-list.component.scss']
})
export class PrinterListComponent implements OnInit, AfterViewInit {

  dataSource = ELEMENT_DATA;

  printers: Printer[] = [];

  displayedColumns: string[] =
  [
    'image',
    'model', 
    'manufacturer',
    'wifi',
    'usb',
    'ethernet',
    'scanner',
    'fax',
    'usb-flash-driver',
    'price'
  ];

  totalItems: number = 0;
  currentPage: number = 0;
  currentPageItems: number = 0;
  currentColumnDef: string = 'id';
  currentActivityState: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private printerService: PrinterService,
    private printerDialogService: PrinterDialogService) {}

  ngOnInit(): void {
    this.printerService.fetchPrinters(0, 25, 'MODEL', 'ASC')
    .subscribe(
      (printers: any) => {
        this.dataSource = printers.slice(0,5);
      }
    );

  }

  openPrinterDialog(printerData: PrinterDialogData) {
    this.printerDialogService.fetchPrinter(printerData);
  }

  ngAfterViewInit() {
    //this.dataSource.sort = this.sort;
  }


}