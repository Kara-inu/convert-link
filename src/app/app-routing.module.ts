import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ExtraComponent } from './page/extra/extra.component';
import { ListURLComponent } from './page/list-url/list-url.component';
import { RedirectComponent } from './interface/redirect/redirect.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListURLComponent },
  { path: 'extra', component: ExtraComponent },
  { path: 'short/:id', component: RedirectComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, //part ที่ไม่ได้  set ไว้

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
