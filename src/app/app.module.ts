import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './public/pages/home/home.component';
import { ServicesComponent } from './public/pages/services/services.component';
import { TeamComponent } from './public/pages/team/team.component';
import { PricingComponent } from './public/pages/pricing/pricing.component';
import { ContactComponent } from './public/pages/contact/contact.component';
import { LoginComponent } from './iam/pages/login/login.component';
import { SingupComponent } from './iam/pages/singup/singup.component';
import {NgOptimizedImage} from "@angular/common";
import { SmoothScrollService } from './public/services/smooth-scroll.service';
import { FooterComponent } from './public/pages/footer/footer.component';
import { HeaderComponent } from './public/pages/header/header.component';
import { HomepageComponent } from './public/pages/homepage/homepage.component'; // Importa el servicio
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import { BoardAdminComponent } from './iam/component/board-admin/board-admin.component';
import { AdminProfileComponent } from './iam/component/profile/profile.component';
import { CreateAdminComponent } from './iam/component/create-admin/create-admin.component';
import { UserComponent } from './iam/component/user/user.component';
import { LoginAdminComponent } from './iam/component/login-admin/login-admin.component';
import { CreateUserComponent } from './iam/component/create-user/create-user.component';

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    ServicesComponent,
    TeamComponent,
    PricingComponent,
    ContactComponent,
    LoginComponent,
    SingupComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,

    BoardAdminComponent,
    AdminProfileComponent,
      CreateAdminComponent,
      UserComponent,
      LoginAdminComponent,
      CreateUserComponent,


  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatSnackBarModule,
    BrowserAnimationsModule,
    RouterModule,



  ],
  providers: [SmoothScrollService], // Añade el servicio a los proveedores
  bootstrap: [AppComponent]
})
export class AppModule { }
