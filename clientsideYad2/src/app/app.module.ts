import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';
import { SuccessComponent } from './components/success/success.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SignupComponent,
    AddProductComponent,
    ProductComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterLink,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
