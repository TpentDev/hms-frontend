import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrinterDialogState } from 'src/app/modules/printer/enums/printerDialogState.enum';
import { PrinterDialogData } from 'src/app/modules/printer/interfaces/printerDialogData.interface';

@Component({
  selector: 'app-printer-detail',
  templateUrl: './printer-detail.component.html',
  styleUrls: ['./printer-detail.component.scss']
})
export class PrinterDetailComponent {

  @Input()
  public printerData!: PrinterDialogData;

  @Output()
  dialogStateEvent: EventEmitter<PrinterDialogState> = new EventEmitter<PrinterDialogState>();

  constructor() {}

  editPrinter() {
    this.dialogStateEvent.emit(PrinterDialogState.Edit);
  }
  
  deletePrinter(id: string) {

  }

}