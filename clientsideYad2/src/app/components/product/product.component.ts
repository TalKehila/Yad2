import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/models/product';
import Owner from 'src/models/owner';
import { ProductService } from 'src/app/service/product.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Product = new Product(); // Initialize with an empty product object
  owner: Owner = new Owner();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private ownerservice: AuthService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const productId = params['id'];

      this.productService
        .getProduct(productId)
        .subscribe((product: Product) => {
          this.product = product;

          this.ownerservice.getOwnerById(product.ownerId).subscribe((owner: Owner) => {
            this.owner = owner;
          });
        });
    });
  }
}

