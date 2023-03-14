import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'printers',
    loadChildren: () => import('./modules/printer/printer.module')
      .then(m => m.PrinterModule)
  },
  {
    path: 'supplies',
    loadChildren: () => import('./modules/supply/supply.module')
      .then(m => m.SupplyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
