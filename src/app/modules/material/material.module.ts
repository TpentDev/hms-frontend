import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: []

})
export class MaterialModule {}