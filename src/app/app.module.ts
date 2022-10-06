import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HeaderComponent } from './particals/header/header.component';
import { FooterComponent } from './particals/footer/footer.component';
import { HeaderLinksListComponent } from './particals/header/components/header-links-list/header-links-list.component';
import { HeaderButtonComponent } from './particals/header/components/header-button/header-button.component';
import { ProfilePhotoComponent } from './particals/profile-photo/profile-photo.component';
import { SearchComponent } from './particals/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    FooterComponent,
    HeaderLinksListComponent,
    HeaderButtonComponent,
    ProfilePhotoComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
