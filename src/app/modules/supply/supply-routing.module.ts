import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SuppliesComponent } from "./components/supplies/supplies.component";
import { SupplyEditComponent } from "./components/supplies/supply-edit/supply-edit.component";

const routes: Routes = [
  { path: '', component: SuppliesComponent,
    children: [
      { path: 'create', component: SupplyEditComponent },
      { path: 'edit/:id', component: SupplyEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplyRoutingModule { }