import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  static NUMBER_TABLE = [
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1, // 00 - 09
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1, // 10 - 19
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1, // 20 - 29
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1, // 30 - 39
    -1,-1,-1,-1,-1,-1,-1,-1, 0, 1, // 40 - 49
     2, 3, 4, 5, 6, 7, 8, 9,-1,-1  // 50 - 59
  ];

  title = 'open-food';
  _scan: boolean = true;
  barcode: string = '';
  product:any = {};

  constructor(private apiService:ApiService) {}

  scan() {
    this._scan = true;
    this.barcode = '';
  }

  setBarcode(barcode:string):void {
    if(!barcode) {
      this.scan();
      return;
    } else if(this.scan && this.check(barcode)) {
      this._scan = false;
      this.apiService.getProduct(barcode).subscribe((result)=> {

        if(result.status == 0) {
          this.scan();
          return;
        }
        this.barcode = barcode;
        this.product = result.product;
      });
    }
  }

  check(barcode:string):boolean {
    let checkDigit = Number(barcode.charAt(barcode.length - 1));
    return checkDigit === this.computeCheckDigit(barcode.substring(0, barcode.length - 1));
  }

  computeCheckDigit(barcode:string):number {
    
    let odd, even = 0;
    let i = barcode.length - 1;

    if (i & 0b1) { // even check
        odd = 0;
    } else {
        odd = AppComponent.NUMBER_TABLE[barcode.charCodeAt(0)];
    }
    // Multiply value of each position by x3, x1 and add results together to create sum
    for (; i > 0; i -= 2) {
        odd  += AppComponent.NUMBER_TABLE[barcode.charCodeAt(i    )];
        even += AppComponent.NUMBER_TABLE[barcode.charCodeAt(i - 1)];
    }
    // Subtract the sum from nearest equal or higher multiple of ten
    let result = (even + odd * 3) % 10; 
    if(result !== 0) {
      result = 10 - result;
    }  
    return result;
  } 

}
