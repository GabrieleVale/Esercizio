import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillCategoryComponent } from './skill-category/skill-category.component';
import { CategoryService } from './category.service';
import { SkillAssessmentComponent } from './skill-assessment/skill-assessment.component';
import { SkillComponent } from './skill/skill.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './authService/auth.service';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './route.service/route-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillCategoryComponent,
    SkillAssessmentComponent,
    SkillComponent,
    LoginComponent,
    RegistrazioneComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CategoryService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
