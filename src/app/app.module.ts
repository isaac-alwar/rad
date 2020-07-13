import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';
import { ClaimComponent } from './claim/claim.component';
import { ClaimtickedComponent } from './claimticked/claimticked.component';
import { HttpClientModule } from '@angular/common/http'
import { GameService } from './game.service';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    ClaimComponent,
    ClaimtickedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
    HttpClientModule,
    FormsModule

  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
