import { NgModule } from '@angular/core';
import { SuppliesComponent } from './components/supplies/supplies.component';
import { SupplyListComponent } from './components/supplies/supply-list/supply-list.component';
import { SupplyEditComponent } from './components/supplies/supply-edit/supply-edit.component';
import { SharedModule } from '../shared/shared.module';
import { SupplyRoutingModule } from './supply-routing.module';



@NgModule({
  declarations: [
    SuppliesComponent,
    SupplyListComponent,
    SupplyEditComponent
  ],
  imports: [
    SupplyRoutingModule,
    SharedModule
  ]
})
export class SupplyModule { }
