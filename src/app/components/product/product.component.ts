import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Output() scan = new EventEmitter<string>();
  @Input() product: any = {};
  
  constructor() {}

  returnToScanner():void {
    this.scan.emit();
  }

  ngOnChanges(changes: any) {
    // console.log("Nuevo valor:", changes.product.currentValue);
  }

}
