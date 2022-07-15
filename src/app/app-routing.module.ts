import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from './route.service/route-guard.service';
import { LoginComponent } from './login/login.component';
import { SkillAssessmentComponent } from './skill-assessment/skill-assessment.component';
import { SkillCategoryComponent } from './skill-category/skill-category.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
   path: "",
   redirectTo: "login",
   pathMatch: "full"
  },
  {
    path: "registrazione",
    component: RegistrazioneComponent,
    canActivate: []
  },
  {
    path: 'profilo',
    component: SkillCategoryComponent
  },
  {
    path: 'profilo/:id',
    component: SkillCategoryComponent
  },
  {
    path: 'amministratore',
    component: AdminComponent,
    canActivate: []
  },
  {
    path: 'skill',
    component: SkillAssessmentComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  ]
  
})
export class AppRoutingModule { }
