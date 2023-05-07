import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ListURLComponent } from './page/list-url/list-url.component';
import { HeaderComponent } from './page/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';

import { ExtraComponent } from './page/extra/extra.component';
import { CreateShortLinkComponent } from './page/create-short-link/create-short-link.component';

import { WINDOW_PROVIDERS } from './window.poviders';
import { UtilsService } from './service/utils.service';
import { RedirectComponent } from './interface/redirect/redirect.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListURLComponent,
    HeaderComponent,
    ExtraComponent,
    CreateShortLinkComponent,
    RedirectComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule

  ],
  providers: [WINDOW_PROVIDERS,UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
