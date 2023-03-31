import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { PrinterDialogComponent } from '../../components/printers/printer-dialog/printer-dialog.component';
import { PrinterDialogState } from '../../enums/printerDialogState.enum';
import { PrinterDialogData } from '../../interfaces/printerDialogData.interface';

@Injectable({ providedIn: 'root' })
export class PrinterDialogService {
    public printerDialogSubject = new Subject<PrinterDialogState>();
    public printerDialogState = this.printerDialogSubject.asObservable();

    private dialogRef!: MatDialogRef<PrinterDialogComponent, any>;

    constructor(private printerDialog: MatDialog) { }

    addPrinter() {
        const dialogConfig = this.createBasicDialogConfig();

        this.dialogRef = this.openDialog(this.printerDialog, dialogConfig);
    }

    fetchPrinter(printer: PrinterDialogData): void {
        const dialogConfig = this.createBasicDialogConfig();
        dialogConfig.data = { printer };
        this.dialogRef = this.openDialog(this.printerDialog, dialogConfig);
    }

    closeDialog() {
        this.dialogRef.close();
    }

    closeAllDialogs() {
        this.printerDialog.closeAll();
    }

    openDialog(printerDialog: MatDialog, dialogConfig: MatDialogConfig): MatDialogRef<PrinterDialogComponent, any> {
        return printerDialog.open(PrinterDialogComponent, dialogConfig);
    }

    setDialogState(printerDialogState: PrinterDialogState) {
        this.printerDialogSubject.next(printerDialogState);
    }

    private createBasicDialogConfig(): MatDialogConfig {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = false;
        dialogConfig.maxHeight = '60em';
        dialogConfig.minHeight = '52em';
        dialogConfig.maxWidth = '30em';
        dialogConfig.minWidth = 'min-content';

        return dialogConfig;
    }

}