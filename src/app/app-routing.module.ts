import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageModule } from "../pages/home/home.module";
import { PageNotFoundComponent } from "./shared/components";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () => HomePageModule,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
