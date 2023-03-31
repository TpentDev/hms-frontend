import { Component } from '@angular/core';
import { PrinterDialogService } from '../../services/printer-dialog/printer-dialog.service';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.component.html',
  styleUrls: ['./printers.component.scss']
})
export class PrintersComponent {

  constructor(
    private printerDialogService: PrinterDialogService
  ) {}

  createPrinter() {
    this.printerDialogService.addPrinter();
  }
}
