import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DatePipe } from "@angular/common";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

//modules
import { CarouselModule } from "ngx-bootstrap/carousel";
import { AngularFontAwesomeModule } from "node_modules/angular-font-awesome";
import { ModalModule } from 'ngx-bootstrap/modal';

//componentes
import { NoticiasUpsertComponent } from "./components/noticias-upsert/noticias-upsert.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PrivateComponent } from "./components/private/private.component";
import { LoginComponent } from "./components/login/login.component";
import { AcercaDeComponent } from "./components/acerca-de/acerca-de.component";
import { NoticiasListComponent } from "./components/noticias-list/noticias-list.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

//pipes
import { PipesComponent } from "./components/pipes/pipes.component";
import { DomSecurityPipe } from './pipes/dom-security/dom-security.pipe';
//guards
import { AuthGuard } from "../app/guards/auth.guard";
import { ExtraModule } from './extra/extra.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NoticiasListComponent,
    NoticiasUpsertComponent,
    PrivateComponent,
    LoginComponent,
    AcercaDeComponent,
    PipesComponent,
    DomSecurityPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    ExtraModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [DatePipe, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
