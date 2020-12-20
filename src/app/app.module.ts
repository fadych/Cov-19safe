import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ImageUploadModule } from 'angular2-image-upload';
import { AgmCoreModule } from '@agm/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS , HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { Proxy } from './core/services/proxy.service';
import { CommonService } from './core/services/common.service';
import { CanActivateThisRoute } from './core/Guard/RouterGuard';
import { MaterialModule } from './core/Material/material.module';
import { RoutingModule } from './core/Routing/routing.module';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { MyHttpInterceptor } from './core/Interceptor/interceptor.service';
import { DirectionsMapDirective } from './core/Directives/DirectionsMapDirective';
import { MenuComponent } from './components/menu/menu.component';
import { SignalRService } from './core/Services/SignalRService';
import { CovidComponent } from './components/covid/covid.component';
import { VisitorsComponent } from './components/visitors/visitors.component';
import { NeighborhoodComponent } from './components/Neighborhood/neighborhood.component';
import { PatientComponent } from './components/Patient/patient.component';
import { Contact_caseComponent } from './components/Contact_case/contact_case.component';
import { ConfinementComponent } from './components/Confinement/confinement.component';
import { PersonComponent } from './components/Person/person.component';
import { Death_patientComponent } from './components/Death_patient/death_patient.component';
import { Recovery_patientComponent } from './components/Recovery_patient/recovery_patient.component';
import { ScheduleComponent } from './components/Schedule/schedule.component';
import { CaseComponent } from './components/Case/case.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    Death_patientComponent,
    CaseComponent,
    Recovery_patientComponent,
    ScheduleComponent,
    PersonComponent,
    NeighborhoodComponent,
    PatientComponent,
    Contact_caseComponent,
    ConfinementComponent,
    CovidComponent,
    VisitorsComponent,
    LoginComponent,
    AppComponent,
    LogoutComponent,
    DeleteConfirmationComponent,
    DirectionsMapDirective,
    MenuComponent
  ],
  entryComponents: [
    DeleteConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    ImageUploadModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCkBsM4-NKYM-ivEHOLrFJCxL00fhcQsMY'
    }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ],
  providers: [
            Proxy,
            CommonService,
            CanActivateThisRoute,
            {
              provide: HTTP_INTERCEPTORS,
              useClass: MyHttpInterceptor,
              multi: true
            },
            SignalRService
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
