import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrinterDialogState } from '../../../enums/printerDialogState.enum';
import { PrinterDialogData } from '../../../interfaces/printerDialogData.interface';

@Component({
  selector: 'app-printer-dialog',
  templateUrl: './printer-dialog.component.html',
  styleUrls: ['./printer-dialog.component.scss']
})
export class PrinterDialogComponent implements OnInit {

  editStateEvent!: PrinterDialogState;
  isDetailMode: boolean = true;

  constructor (
    private dialogRef: MatDialogRef<PrinterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public printerDialogData: PrinterDialogData) {}


  ngOnInit(): void { }

  close() {
    this.dialogRef.close(null);
  }

  fetchDialogState(printerDialogState: PrinterDialogState) {
    this.editStateEvent = printerDialogState;
    this.isDetailMode = this.editStateEvent === PrinterDialogState.Detail ? true : false ;
  }

}
