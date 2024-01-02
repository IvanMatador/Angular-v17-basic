import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { DoctorsComponent } from "./components/doctors/doctors.component";
import { EquipmentComponent } from "./components/equipment/equipment.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'equipment', component: EquipmentComponent },
];
