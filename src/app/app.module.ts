import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { UserComponent } from "./components/user/user.component";
import { DataService } from "./services/data.service";
import { ResumeComponent } from "./components/resume/resume.component";
import { HomeComponent } from "./components/home/home.component";
import { TestComponent } from "./components/test/test.component";
import { PatientComponent } from "./components/patient/patient.component";
import { UninavComponent } from "./components/uninav/uninav.component";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: "home", component: HomeComponent },
  { path: "user", component: UserComponent },
  { path: "resume", component: ResumeComponent },
  { path: "test", component: TestComponent },
  { path: "gohealth", component: PatientComponent }
];

// { path: "", component: AppComponent },

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ResumeComponent,
    HomeComponent,
    TestComponent,
    PatientComponent,
    UninavComponent
  ],
  imports: [
    BrowserModule,
    // BrowserModule.withServerTransition({ appId: "portfolio" }),
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
