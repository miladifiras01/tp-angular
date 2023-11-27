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
// pipe
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'products', component: ProduitComponent },
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'cv', component: CvComponent },
      { path: 'cv/:id', component: DetailCvComponent, resolve: { cv: detailResolver } },
      {
        path: 'list',
        component: MasterDetailsComponent,
        children: [
          {
            path: ':id',
            component: DetailCvComponent,
            resolve: { cv: detailResolver },
          },
        ],
      },
      { path: 'list/:id?', component: MasterDetailsComponent },
      { path: 'route/:quelquechose', component: RouterParamComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'pipe', component: TestPureComponent }],
  },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
