import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {EditGalleryComponent} from './edit-gallery/edit-gallery.component';
import {UploadPictureComponent} from './upload-picture/upload-picture.component';
import {EditPictureComponent} from './edit-picture/edit-picture.component';
import {ViewPictureComponent} from './view-picture/view-picture.component';
import {AuthGuard} from './_services/auth-guard.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'edit-gallery', component: EditGalleryComponent, canActivate: [AuthGuard]},
  {path: 'upload-picture/:gallery-id', component: UploadPictureComponent, canActivate: [AuthGuard]},
  {path: 'view-picture/:gallery-id', component: ViewPictureComponent, canActivate: [AuthGuard]},
  {path: 'edit-picture/:gallery-id/:picture-id', component: EditPictureComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
