import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { PrinterEditComponent } from "./components/printers/printer-dialog/printer-edit/printer-edit.component";
import { PrintersComponent } from "./components/printers/printers.component";

const routes: Routes = [
  { path: '', component: PrintersComponent,
    children: [
      { path: 'create', component: PrinterEditComponent },
      { path: 'edit/:id', component: PrinterEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrinterRoutingModule { }