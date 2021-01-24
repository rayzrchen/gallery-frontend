import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {UserComponent} from './user/user.component';
import { EditGalleryComponent } from './edit-gallery/edit-gallery.component';
import { EditPictureComponent } from './edit-picture/edit-picture.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';
import { ViewPictureComponent } from './view-picture/view-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    EditGalleryComponent,
    EditPictureComponent,
    UploadPictureComponent,
    ViewPictureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
