import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ProductService } from 'src/app/service/product.service';
import Owner from 'src/models/owner';
import Product  from 'src/models/product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  owners: Owner [] = [];

  constructor(private router: Router, private productSevice: ProductService ,private authservice:AuthService) {}
  ngOnInit(): void {
    this.productSevice.getAllProduct().subscribe((data) => {
      this.products = data;
    });
  }

  BuyProduct(id: number){
    this.productSevice.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((p) => p.id !== id);
    });
  }

  watchProduct(productId: number):void {
    this.productSevice.getProduct(productId).subscribe(data => {
      if(data){
        this.router.navigate(['product/:id'], {
          queryParams: {
            id: productId,
          },
        });

        this.authservice.getOwnerById(data.ownerId).subscribe(owner  => {
          if(owner){
            console.log('owner id',owner.id)
            
          }
        })
       
      }
    })
  }
}

