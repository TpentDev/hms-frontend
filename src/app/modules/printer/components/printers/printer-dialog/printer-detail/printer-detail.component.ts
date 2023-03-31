import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrinterDialogState } from 'src/app/modules/printer/enums/printerDialogState.enum';
import { PrinterDialogData } from 'src/app/modules/printer/interfaces/printerDialogData.interface';
import { PrinterDialogService } from 'src/app/modules/printer/services/printer-dialog/printer-dialog.service';

@Component({
  selector: 'app-printer-detail',
  templateUrl: './printer-detail.component.html',
  styleUrls: ['./printer-detail.component.scss']
})
export class PrinterDetailComponent {

  @Input()
  public printerData!: PrinterDialogData;

  constructor(
    private printerDialogService: PrinterDialogService
  ) {}

  editPrinter() {
    this.printerDialogService.setDialogState(PrinterDialogState.Edit);
  }
  
  deletePrinter(id: string) {

  }

}