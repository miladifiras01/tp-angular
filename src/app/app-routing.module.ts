import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TestPureComponent } from './test-pure/test-pure.component';
import { HomeComponent } from './components/home/home.component';
import { RouterParamComponent } from './components/router-param/router-param.component';
import { FrontComponent } from './components/front/front.component';
import { AdminComponent } from './components/admin/admin.component';
import { NF404Component } from './components/nf404/nf404.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { LoginComponent } from './login/login/login.component';
import { MergeComponent } from './merge/merge.component';
import { ProduitComponent } from './produit/produit/produit.component';
import { MasterDetailsComponent } from './cv/master-details/master-details.component';
import { detailResolver } from './resolvers/detail.resolver';
import { RegisterComponent } from './login/register/register.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { addCvGuard } from './guards/add-cv.guard';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';
// pipe
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'auth', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'merge', component: MergeComponent },
  { path: 'products', component: ProduitComponent },
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'route/:quelquechose', component: RouterParamComponent },
    ],
  },
  {
    path: 'cv',
    loadChildren: () => import('./cv/cv.module').then((m) => m.CvModule),
    data: { preload: true },
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'pipe', component: TestPureComponent }],
  },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
