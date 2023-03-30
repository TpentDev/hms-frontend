import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { PrinterDialogComponent } from '../../components/printers/printer-dialog/printer-dialog.component';
import { PrinterDialogData } from '../../interfaces/printerDialogData.interface';

@Injectable({ providedIn: 'root' })
export class PrinterDialogService {
    public printerDialogSubject = new Subject<PrinterDialogData | null>();
    public printerDialogState = this.printerDialogSubject.asObservable();

    constructor(private printerDialog: MatDialog) { }

    addPrinter() {
        
    }

    fetchPrinter(printer: PrinterDialogData): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = false;
        dialogConfig.data = { printer };
        dialogConfig.maxHeight = '60em';
        dialogConfig.minHeight = '52em';
        dialogConfig.maxWidth = '30em';
        dialogConfig.minWidth = 'min-content';
    
        const dialogRef = this.printerDialog.open(PrinterDialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe((result: PrinterDialogData) => {
            console.log(`Dialog result: ${result}`);
            this.printerDialogSubject.next(result);
        });
    }

}