import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NoticiasListComponent } from "../app/components/noticias-list/noticias-list.component";
import { NoticiasUpsertComponent } from "../app/components/noticias-upsert/noticias-upsert.component";
import { LoginComponent } from "../app/components/login/login.component";
import { PrivateComponent } from "../app/components/private/private.component";
import { AcercaDeComponent } from "../app/components/acerca-de/acerca-de.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "acerca-de", component: AcercaDeComponent },
  {
    path: "private",
    component: PrivateComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "noticias/list", component: NoticiasListComponent },
      { path: "noticias-edit/:id", component: NoticiasUpsertComponent },
      { path: "noticias-insert", component: NoticiasUpsertComponent }
    ]
  },
  { path: "**", redirectTo: "private/noticias/list" }
  // { path: "**", pathMatch: "full", redirectTo: "noticias/list" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
