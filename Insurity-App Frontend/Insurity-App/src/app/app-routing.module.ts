import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConsumerBusinessComponent } from './consumer-business/consumer-business.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PolicyComponent } from './policy/policy.component';
import { PropertyComponent } from './property/property.component';



const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  {path: 'viewConsumerBusiness', component: ConsumerBusinessComponent},
  //{path: 'property', component: PropertyComponent},
  {path: 'viewBusinessProperty/:consumerId/:propertyId', component: PropertyComponent},
  {path: 'viewPolicy', component : PolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AppComponent ];