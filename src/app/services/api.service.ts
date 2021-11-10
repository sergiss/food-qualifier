import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ApiService {

  private urlEndPoint:string= 'https://world.openfoodfacts.org/api/v0/product/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }
  
  public getProduct(barcode:string) : Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${barcode}`)
  }

}
