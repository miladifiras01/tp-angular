import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { DefaultImagePipe } from "./cv/pipes/default-image.pipe";
import { TestPureComponent } from "./test-pure/test-pure.component";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { CalculFuPipe } from "./pipes/calcul-fu.pipe";
import { createLogger } from "./provider factories/instances.factory";
import { loggerToken } from "./injection tokens/logger.token";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { RouterParamComponent } from "./components/router-param/router-param.component";
import { FrontComponent } from "./components/front/front.component";
import { AdminComponent } from "./components/admin/admin.component";
import { MasterDetailsComponent } from "./cv/master-details/master-details.component";
import { DetailCvComponent } from "./cv/detail-cv/detail-cv.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { TestformComponent } from "./components/testform/testform.component";
import { ObservableComponent } from "./rxjs/observable/observable.component";
import { ToastrModule } from "ngx-toastr";
import { SliderComponent } from "./rxjs/slider/slider.component";
import { MergeComponent } from './merge/merge.component';
import { ProduitComponent } from './produit/produit/produit.component';
import { CvModule } from "./cv/cv.module";
import { LoginModule } from "./login/login.module";

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DefaultImagePipe,
    TestPureComponent,
    CalculFuPipe,
    NavbarComponent,
    HomeComponent,
    RouterParamComponent,
    FrontComponent,
    AdminComponent,
    NF404Component,
    TestformComponent,
    ObservableComponent,
    SliderComponent,
    MergeComponent,
    ProduitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [
    {
      useFactory: createLogger,
      provide: loggerToken,
      deps: [],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
