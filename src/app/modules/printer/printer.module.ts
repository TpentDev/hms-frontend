import { NgModule } from '@angular/core';
import { PrintersComponent } from './components/printers/printers.component';
import { PrinterEditComponent } from './components/printers/printer-edit/printer-edit.component';
import { PrinterListComponent } from './components/printers/printer-list/printer-list.component';
import { PrinterRoutingModule } from './printer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrinterDialogComponent } from './components/printers/printer-dialog/printer-dialog.component';


@NgModule({
  declarations: [
    PrintersComponent,
    PrinterListComponent,
    PrinterEditComponent,
    PrinterDialogComponent
  ],
  imports: [
    PrinterRoutingModule,
    SharedModule
  ]
})
export class PrinterModule { }
