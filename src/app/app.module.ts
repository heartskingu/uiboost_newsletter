import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UbIconComponent } from './shared/components/ub-icon/ub-icon.component';
import { UbButtonComponent } from './shared/components/ub-button/ub-button.component';
import { UbInputComponent } from './shared/components/ub-input/ub-input.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { UbCardComponent } from './shared/components/ub-card/ub-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UbIconComponent,
    UbButtonComponent,
    UbInputComponent,
    LandingpageComponent,
    UbCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
