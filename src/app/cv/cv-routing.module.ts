import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { addCvGuard } from '../guards/add-cv.guard';
import { detailResolver } from '../resolvers/detail.resolver';
import { MasterDetailsComponent } from './master-details/master-details.component';

const routes: Routes = [
  { path: '', component: CvComponent },
  { path: 'add', component: AddCvComponent, canDeactivate: [addCvGuard] },
  {
    path: ':id',
    component: DetailCvComponent,
    resolve: { cv: detailResolver },
  },
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
