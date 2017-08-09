import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { AppComponent } from './containers/app/app.component';
import { AuthModule } from '../auth/auth.module';
import { Store } from '../store';

const ROUTES: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}
