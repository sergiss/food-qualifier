import { Component, ViewChild, AfterViewInit, OnInit } from "@angular/core";
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";
import { Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.css']
})
export class BarcodeScannerComponent implements AfterViewInit , OnInit {

  @Output() setBarcode = new EventEmitter<string>();

  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent = new BarcodeScannerLivestreamComponent();
  
  type:string = "ean";
  barcode: string = '';
  connecting:boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.barcode = '';
    this.connecting = true;
    // this.setBarcode.next('8480000340795');
  }

  ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  onValueChanges(result:any) {
    let barcode = result.codeResult.code;
    if(barcode != this.barcode) {
      this.barcode = barcode;
      this.setBarcode.next(result.codeResult.code);
    }    
  }

  onStarted(started:any) {
    this.connecting = !started;
  }

}
