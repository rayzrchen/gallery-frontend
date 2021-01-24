import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {UserComponent} from './user/user.component';
import {EditGalleryComponent} from './edit-gallery/edit-gallery.component';
import {UploadPictureComponent} from './upload-picture/upload-picture.component';
import {EditPictureComponent} from './edit-picture/edit-picture.component';
import {ViewPictureComponent} from './view-picture/view-picture.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent },
  { path: 'edit-gallery', component: EditGalleryComponent },
  { path: 'upload-picture', component: UploadPictureComponent },
  { path: 'view-picture', component: ViewPictureComponent },
  { path: 'edit-picture', component: EditPictureComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
