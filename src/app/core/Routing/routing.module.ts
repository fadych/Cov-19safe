import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { LogoutComponent } from '../../components/logout/logout.component';
import { CanActivateThisRoute } from '../Guard/RouterGuard';
import { MenuComponent } from '../../components/menu/menu.component';
import { CovidComponent } from '../../components/covid/covid.component';

import { NeighborhoodComponent } from '../../components/Neighborhood/neighborhood.component';
import { PatientComponent } from '../../components/Patient/patient.component';
import { ConfinementComponent } from '../../components/Confinement/confinement.component';
import { Contact_caseComponent } from '../../components/Contact_case/contact_case.component';
import { VisitorsComponent } from '../../components/visitors/visitors.component';
import { PersonComponent } from '../../components/Person/person.component';
import { Recovery_patientComponent } from '../../components/Recovery_patient/recovery_patient.component';
import { Death_patientComponent } from '../../components/Death_patient/death_patient.component';
import { ScheduleComponent } from '../../components/Schedule/schedule.component';
import { CaseComponent } from '../../components/Case/case.component';


export const routes: Routes = [
    {path:'',component:CovidComponent},
    {path:'login',component:LoginComponent},
    {path:'logout',component:LogoutComponent},
    {path:'Neighborhood',component:NeighborhoodComponent},
    {path:'person',component:PersonComponent},
    {path:'case',component:CaseComponent},
    {path:'Recovery_patient',component:Recovery_patientComponent},
    {path:'Death_patient',component:Death_patientComponent},
    {path:'Schedule',component:ScheduleComponent},
    {path:'Confinement',component:ConfinementComponent},
    {path:'visitors',component:VisitorsComponent},
    {path:'Contact_Case',component:Contact_caseComponent},
    {path:'Patient',component:PatientComponent},
    {path:'menu',component:MenuComponent, canActivate: [CanActivateThisRoute]},
    {path:'**',component:CovidComponent}
  ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class RoutingModule {}
