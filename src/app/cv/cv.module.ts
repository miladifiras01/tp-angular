import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CardComponent } from './card/card.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { SearchCvComponent } from './autocomplete/autocomplete.component';
import { MasterDetailsComponent } from './master-details/master-details.component';
import { ListHiredComponent } from './list-hired/list-hired.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    AddCvComponent,
    DetailCvComponent,
    SearchCvComponent,
    MasterDetailsComponent,
    ListHiredComponent,
    DefaultImagePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CvRoutingModule,
  ]
})
export class CvModule { }
