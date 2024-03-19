import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from 'src/models/product';
import Owner from 'src/models/owner';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  baseUrl = 'http://localhost:5083/Product';
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`);
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}`, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, product);
  }

  getProduct(Id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${Id}`);
  }
 
}
