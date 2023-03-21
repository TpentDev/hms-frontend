import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { PrinterDialogData } from '../../components/printers/interfaces/printerDialogData.interface';
import { PrinterDialogComponent } from '../../components/printers/printer-dialog/printer-dialog.component';

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
        dialogConfig.autoFocus = true;
        dialogConfig.data = { printer };
        dialogConfig.maxWidth = '30em';
        dialogConfig.minWidth = 'min-content';
    
        const dialogRef = this.printerDialog.open(PrinterDialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe((result: PrinterDialogData) => {
            console.log(`Dialog result: ${result}`);
            this.printerDialogSubject.next(result);
        });
    }

}