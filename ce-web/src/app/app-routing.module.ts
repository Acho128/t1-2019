import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NoticiasListComponent } from "../app/components/noticias-list/noticias-list.component";
const routes: Routes = [
  { path: "noticias", component: NoticiasListComponent },
  { path: "**", pathMatch: "full", redirectTo: "noticias" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
