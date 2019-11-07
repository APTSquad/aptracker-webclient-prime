import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListPageModule } from './pages/users-page/users-page';
import { ReportPageModule } from './pages/report-page/report-page';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersListPageModule,
    ReportPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
