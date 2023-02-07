import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router"
import { AppComponent } from './app.component';
import { HomePageComponent } from './WASH/home-page/home-page.component';
import {FooterComponent} from "./side-cpmponents/footer.component";
import { ContactUsComponent } from './WASH/contact-us/contact-us.component';
import { PublicationsComponent } from './WASH/publications/publications.component';
import {WashRouterModule} from "./Router/router-moule.module";
import { QualityCareComponent } from './WASH/quality-care/quality-care.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    ContactUsComponent,
    PublicationsComponent,
    QualityCareComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    WashRouterModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
