import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";
import { ApiService } from './services/api.service';
import { BarcodeScannerComponent } from './components/barcode-scanner/barcode-scanner.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { NovaScoreComponent } from './components/nova-score/nova-score.component';
import { NutriScoreComponent } from './components/nutri-score/nutri-score.component';

const routes: Routes = [
  {path: '', redirectTo: '/scanner', pathMatch: 'full'},
  {path: 'scanner', component: BarcodeScannerComponent},
  {path: 'product/:barcode', component: ProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BarcodeScannerComponent,
    ProductComponent,
    NovaScoreComponent,
    NutriScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //RouterModule.forRoot(routes),
    FormsModule,
    BarcodeScannerLivestreamModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
