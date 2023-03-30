import { NgModule } from '@angular/core';
import { PrintersComponent } from './components/printers/printers.component';
import { PrinterEditComponent } from './components/printers/printer-dialog/printer-edit/printer-edit.component';
import { PrinterListComponent } from './components/printers/printer-list/printer-list.component';
import { PrinterRoutingModule } from './printer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrinterDialogComponent } from './components/printers/printer-dialog/printer-dialog.component';
import { PrinterDetailComponent } from './components/printers/printer-dialog/printer-detail/printer-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrintersComponent,
    PrinterListComponent,
    PrinterEditComponent,
    PrinterDialogComponent,
    PrinterDetailComponent
  ],
  imports: [
    PrinterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PrinterModule { }
