import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PresentationENTComponent } from './presentation-ent/presentation-ent.component';
import { AppComponent } from './app.component';
import { FAQComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { MielsComponent } from './miels/miels.component';
import { AccountComponent } from './compte/account.component';
import { ProcessusComponent } from './processus/processus.component';

const routes: Routes = [
  { path: '', component:HomeComponent }, // Route par défaut
  { path: 'about', component: PresentationENTComponent },
  {path: '', redirectTo:'home' , pathMatch:'full'},
  {path: '**', redirectTo:'home' , pathMatch:'full'},
  {path:'faq', component:FAQComponent},
  {path:'contact', component:ContactComponent},
  {path:'boutique', component:BoutiqueComponent},
  {path:'miel/:id', component:MielsComponent},
  {path:'compte', component:AccountComponent},
  {path:'processus', component:ProcessusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
