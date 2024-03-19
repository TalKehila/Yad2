import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import Product from 'src/models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  product: Product = {
    id: 0,
    name: '',
    publishDate: new Date(),
    image: '',
    price: 0,
    ownerId: 0,
  };

  constructor(private productService: ProductService, private router: Router) {}

  createNewProduct(newProduct: Product) {
    this.productService.addProduct(newProduct).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['product-list']);
      },
      (error: HttpErrorResponse) => {
        console.error('Error:', error);

        if (error.status === 400) {
          console.log('Validation errors:', error.error.errors);
        } else {
        }
      }
    );
  }
}
