import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthAdoptionModule } from './auth-adoption/auth-adoption.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    AuthAdoptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
