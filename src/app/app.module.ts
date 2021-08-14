import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { ReturnsComponent } from './returns/returns.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CustomersService } from './services/customers.service';
import { HeaderComponent } from './headers_footers/header/header/header.component';
import { FooterComponent } from './headers_footers/footer/footer/footer.component';
import { FishSectionComponent } from './fish_section/fish-section/fish-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CustomersComponent,
    OrdersComponent,
    ReturnsComponent,
    TopMenuComponent,
    HeaderComponent,
    FooterComponent,
    FishSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
