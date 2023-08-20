import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PresentationENTComponent } from './presentation-ent/presentation-ent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasic } from './home/carousel-basic';
import { FAQComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { MielsComponent } from './miels/miels.component';
import { ProcessusComponent } from './processus/processus.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationENTComponent,
    NavbarComponent,
    FAQComponent,
    ContactComponent,
    BoutiqueComponent,
    MielsComponent,
    ProcessusComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component:HomeComponent }, // Route par défaut
      { path: 'about', component: PresentationENTComponent },
      {path: '', redirectTo:'home' , pathMatch:'full'},
      {path: '**', redirectTo:'home' , pathMatch:'full'}
    
    ]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbModule,
    NgbdCarouselBasic
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
