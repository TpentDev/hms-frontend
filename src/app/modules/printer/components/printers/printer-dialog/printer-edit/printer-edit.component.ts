import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { first, Subscription } from 'rxjs';
import { PrinterDialogState } from 'src/app/modules/printer/enums/printerDialogState.enum';
import { PrinterDialogData } from 'src/app/modules/printer/interfaces/printerDialogData.interface';
import { PrinterRequestData } from 'src/app/modules/printer/interfaces/printerRequestData.interface';
import { PrinterService } from 'src/app/modules/printer/services/printer/printer.service';
import { PrinterDialogComponent } from '../printer-dialog.component';

@Component({
  selector: 'app-printer-edit',
  templateUrl: './printer-edit.component.html',
  styleUrls: ['./printer-edit.component.scss']
})
export class PrinterEditComponent implements OnInit {

  printerForm!: FormGroup;
  submitted: boolean = false;

  @Input()
  printerData!: PrinterDialogData;

  isAddMode!: boolean;

  @Output()
  dialogStateEvent: EventEmitter<PrinterDialogState> = new EventEmitter<PrinterDialogState>();

  createPrinterSubscription!: Subscription;
  updatePrinterSubscription!: Subscription;

  constructor(
    private printerDialogRef: MatDialogRef<PrinterDialogComponent>,
    private formBuilder: FormBuilder,
    private printerService: PrinterService
  ) {}

  ngOnInit() {
    this.createPrinterForm();

    if (!this.printerData) {
      this.isAddMode = true;
    } else {
      this.isAddMode = false;
    }

    this.printerForm.patchValue(this.printerData.printer);
  }

  onSubmit() {
    this.submitted = true;

    if (this.printerForm.invalid) {
      return;
    }

    const printerData: PrinterRequestData = this.createPrinterData();

    if (this.isAddMode) {
      this.createPrinter(printerData);
    } else {
      this.updatePrinter(printerData);
    }

  }

  private createPrinter(printerData: PrinterRequestData) {
    this.createPrinterSubscription = this.printerService.
      createPrinter(printerData).pipe(first())
      .subscribe(() => {

      });
  }

  private updatePrinter(printerData: PrinterRequestData) {
    this.printerDialogRef.close();
    /*
    this.updatePrinterSubscription = this.printerService.
      updatePrinter(1, printerData)
      .pipe(first())
      .subscribe(() => {

      }); */
  }

  onCancel() {
    this.dialogStateEvent.emit(PrinterDialogState.Detail);
  }

  createPrinterForm() {
    this.printerForm = this.formBuilder.group({
      model: ['', Validators.required],
      manufacturer: ['', Validators.required],
      description: ['', Validators.required],
      hasWifi: [false],
      hasUsb: [false],
      hasEthernet: [false],
      hasScanner: [false],
      hasFax: [false],
      hasUsbFlashDriver: [false],
      imageUrl: [''],
      price: [Validators.required]
    });
  }

  get f() { return this.printerForm.controls; }

  createPrinterData(): PrinterRequestData {
    return  {
        model: this.printerForm.value.model,
        manufacturer: this.printerForm.value.manufacturer,
        description: this.printerForm.value.description,
        hasWifi: this.printerForm.value.wifi,
        hasUsb: this.printerForm.value.usb,
        hasEthernet: this.printerForm.value.ethernet,
        hasScanner: this.printerForm.value.scanner,
        hasFax: this.printerForm.value.fax,
        hasUsbFlashDriver: this.printerForm.value.usbFlashDriver,
        image: this.printerForm.value.imageUrl,
        price: this.printerForm.value.price
      }
  }

}