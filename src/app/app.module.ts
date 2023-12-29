import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './components/logo/logo.component';
import { ContentBlockComponent } from './components/content-block/content-block.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftBlockComponent } from './components/left-block/left-block.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RightBlockComponent } from './components/right-block/right-block.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LogoComponent,
    NavigationComponent,
    FooterComponent,
    ContentBlockComponent,
    LeftBlockComponent,
    RightBlockComponent,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
