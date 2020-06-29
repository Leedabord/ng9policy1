import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyDBsvcService } from './services/my-dbsvc.service';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { PolicyService } from './services/policy.service';

@NgModule({
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      {path: 'policy-list', component: PolicyListComponent},
      {path: 'crisis-list', component: CrisisListComponent},
      {path: 'heroes-list', component: HeroesListComponent},
      {path: '', redirectTo: '/crisis-list', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent,
    PageNotFoundComponent,
    TopBarComponent,
    QuoteListComponent,
    ProductListComponent,
    ProductAlertsComponent,
    PolicyListComponent
  ],
  providers: [MyDBsvcService, PolicyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*  */
