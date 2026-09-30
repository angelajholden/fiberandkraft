import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ProductListService } from './product-list.service';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AccountComponent } from './account/account.component';
import { AuthService } from './auth.service';
import { UserComponent } from './user/user.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CartComponent,
        ProductPageComponent,
        ProductsComponent,
        CheckoutComponent,
        LoginComponent,
        RegisterComponent,
        ContactComponent,
        AccountComponent,
        UserComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule, AppRoutingModule, FormsModule], providers: [ProductListService, CartService, AuthService, provideHttpClient(withXhr(), withInterceptorsFromDi())] })
export class AppModule {}
