import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public addProduct(product: IProduct): Observable<any>{
    const url = "http://localhost:3000/products";
    return this.http.post(url,product);
  }
  public showProduct(): Observable<any>{
    const url = "http://localhost:3000/products";
    return this.http.get(url);
  }
  public getProductById(id:number): Observable<any>{
    const url = `http://localhost:3000/products/${id}`;
    return this.http.get(url);
  }
  public editProduct(id: number, product: IProduct): Observable<any>{
    const url = `http://localhost:3000/products/${id}`;
    return this.http.put(url,product);
  }
}
