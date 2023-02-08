import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './shared/components/navigator/navigator.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayersDetailsComponent } from './pages/players-details/players-details.component';
import { AddPlayerComponent } from './pages/add-player/add-player.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    PlayersDetailsComponent,
    AddPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
