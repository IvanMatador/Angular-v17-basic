import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CompaniesComponent } from "./components/companies/companies.component";
import { UsesComponent } from "./components/uses/uses.component";
import { WorksComponent } from "./components/works/works.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'works', component: WorksComponent },
  { path: 'uses', component: UsesComponent },
];
