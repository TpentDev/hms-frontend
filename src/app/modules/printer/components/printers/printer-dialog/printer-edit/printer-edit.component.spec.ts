import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterEditComponent } from './printer-edit.component';

describe('PrinterEditComponent', () => {
  let component: PrinterEditComponent;
  let fixture: ComponentFixture<PrinterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
