import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
import { FooterComponent } from './footer/footer.component';
import { OldMatchesComponent } from './old-matches/old-matches.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MyRecommendationListComponent } from './my-recommendation-list/my-recommendation-list.component';
import { MyRemindersComponent } from './my-reminders/my-reminders.component';
import { BsDatepickerModule } from 'ngx-bootstrap';

//material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule,MatToolbarModule,MatExpansionModule,MatInputModule,MatButtonModule,MatCardModule,MatSelectModule,MatIconModule,MatListModule,MatSidenavModule,
  MatAutocompleteModule,MatSnackBarModule, MatDialogModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavBarComponent } from './nav-bar/nav-bar.component'; 
import { Routes, RouterModule } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatMenuModule} from '@angular/material/menu';
import { CurrentMatchesComponent } from './current-matches/current-matches.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DatePipe } from '@angular/common';
import { SearchResultsChildComponent } from './search-results/search-results-child/search-results-child.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { LiveScoreComponent } from './live-score/live-score.component';
import { ViewlivematchComponent } from './viewlivematch/viewlivematch.component';
import { CanActivateGuard } from './can-activate.guard';
import { Header2Component } from './header/header2/header2.component';

const routes: Routes = [
   {path:'',component:DashboardComponent},
   {path:'dashboard',component:DashboardComponent},
   {path: 'login', component:  LoginComponent },
   {path: 'registration', component:  RegistrationComponent },
   {path: 'search', component:  SearchComponent },
   {path: 'editProfile', component:  EditProfileComponent },
   {path: 'upcomingMatches', component:  UpcomingMatchesComponent },
   {path: 'oldMatches', component:  OldMatchesComponent },
   {path: 'myRecommendations', component:  MyRecommendationListComponent, canActivate:[CanActivateGuard] },
   {path: 'searchResults', component:  SearchResultsComponent },
   {path: 'myReminders', component:  MyRemindersComponent,canActivate:[CanActivateGuard] },
   {path: 'recommendations', component:  RecommendationsComponent },
   {path: 'live-score', component:  LiveScoreComponent },
   {path: 'view-live-score', component:  ViewlivematchComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    UpcomingMatchesComponent,
    FooterComponent,
    OldMatchesComponent,
    SearchComponent,
    LoginComponent,
    RegistrationComponent,
    EditProfileComponent,
    SearchResultsComponent,
    MyRecommendationListComponent,
    NavBarComponent,
    MyRemindersComponent,
    CurrentMatchesComponent,
    SearchResultsChildComponent,
    DialogBoxComponent,
    RecommendationsComponent,
    LiveScoreComponent,
    ViewlivematchComponent,
    Header2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatAutocompleteModule,MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    NgxPaginationModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDialogModule,
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule,
    BsDatepickerModule.forRoot()
  ],
  entryComponents:[DialogBoxComponent],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
