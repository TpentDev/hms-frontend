import { DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Printer } from '../../../models/printer.model';
import { PrinterService } from '../../../services/printer.service';

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
    'price',
    'actions'
  ];

  totalItems: number = 0;
  currentPage: number = 0;
  currentPageItems: number = 0;
  currentColumnDef: string = 'id';
  currentActivityState: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private printerService: PrinterService) {}

  ngOnInit(): void {
    this.printerService.fetchPrinters(0, 25, 'MODEL', 'ASC')
    .subscribe(
      (printers: any) => {
        this.dataSource = printers.slice(0,5);
      }
    );

  }

  ngAfterViewInit() {
    //this.dataSource.sort = this.sort;
  }


}