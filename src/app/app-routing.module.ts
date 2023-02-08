import { PlayersDetailsComponent } from './pages/players-details/players-details.component';
import { ContactModule } from './pages/contact/contact.module';
import { AboutModule } from './pages/about/about.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'players', loadChildren: () => import('./pages/players/players.module').then((m) => m.PlayersModule)},
  {path: 'players/:id', loadChildren: () => import('./pages/players-details/players-details.module').then((m) => m.PlayersDetailsModule)},
  {path: 'createPlayer', loadChildren: () => import('./pages/add-player/add-player.module').then((m) => m.AddPlayerModule)},
  {path: 'palas', loadChildren: () => import('./pages/palas/palas.module').then((m) => m.PalasModule)},
  {path: 'about', loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule)},
  {path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then((m) => m.ContactModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
