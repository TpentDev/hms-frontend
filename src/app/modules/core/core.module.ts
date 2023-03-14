import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavListComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    SidenavListComponent,
    FooterComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CoreModule { }
