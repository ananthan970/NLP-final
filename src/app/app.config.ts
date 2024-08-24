import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SurveyComponent } from './components/survey/survey.component';
//import { HeaderComponent } from './components/header/header.component';
//import { SidebarComponent } from './components/sidebar/sidebar.component';
//import { ContactComponent } from './components/contact/contact.component';
//import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent,
    HomeComponent,
    SurveyComponent,
    //HeaderComponent,
    //SidebarComponent,
    //ContactComponent,
    //FooterComponent
  ],
  providers: [],
})
export class appConfig { }
