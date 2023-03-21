import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrinterDialogData } from '../interfaces/printerDialogData.interface';

@Component({
  selector: 'app-printer-dialog',
  templateUrl: './printer-dialog.component.html',
  styleUrls: ['./printer-dialog.component.scss']
})
export class PrinterDialogComponent implements OnInit {

  constructor (
    private dialogRef: MatDialogRef<PrinterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public printerData: PrinterDialogData) {}


  ngOnInit(): void {

  }

  close() {
    this.dialogRef.close(null);
  }

}
