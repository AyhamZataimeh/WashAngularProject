import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomePageComponent} from "../WASH/home-page/home-page.component";
import {PublicationsComponent} from "../WASH/publications/publications.component";
import {ContactUsComponent} from "../WASH/contact-us/contact-us.component";
import {QualityCareComponent} from "../WASH/quality-care/quality-care.component";
const routs: Routes=[
    {path:"HomePage",component:HomePageComponent},
    {path:"ContactUs",component:ContactUsComponent},
    {path:"Publications",component:PublicationsComponent},
    {path:"QualityCare",component:QualityCareComponent},


];

@NgModule({
    imports:[RouterModule.forRoot(routs)],
    exports:[RouterModule]
})

export class WashRouterModule{}