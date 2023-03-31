import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PrinterDialogState } from '../../../enums/printerDialogState.enum';
import { PrinterDialogData } from '../../../interfaces/printerDialogData.interface';
import { PrinterDialogService } from '../../../services/printer-dialog/printer-dialog.service';

@Component({
  selector: 'app-printer-dialog',
  templateUrl: './printer-dialog.component.html',
  styleUrls: ['./printer-dialog.component.scss']
})
export class PrinterDialogComponent implements OnInit, OnDestroy {

  isEditMode: boolean = false;
  isDetailMode: boolean = false;
  printerDialogState!: PrinterDialogState;

  private printerDialogStateSubscription!: Subscription;

  constructor (
    private printerDialogService: PrinterDialogService,
    @Inject(MAT_DIALOG_DATA) public printerDialogData: PrinterDialogData) {}


  ngOnInit(): void {
    this.initDialogState();
    this.fetchDialogState();
  }

  close() {
    this.printerDialogService.closeDialog();
  }

  private initDialogState() {
    this.isDetailMode = this.printerDialogData !== null ? true : false;
  }

  private fetchDialogState() {
    this.printerDialogStateSubscription = this.printerDialogService
      .printerDialogState.subscribe((state: PrinterDialogState) => {
        this.printerDialogState = state;
        this.setDialogState();
    });
  }

  private setDialogState() {
    this.isDetailMode = this.printerDialogState === PrinterDialogState.Detail ? true : false;
    this.isEditMode = this.printerDialogState === PrinterDialogState.Edit ? true : false;
  }

  ngOnDestroy(): void {
    if (this.printerDialogStateSubscription) {
      this.printerDialogStateSubscription.unsubscribe();
    }
  }

}