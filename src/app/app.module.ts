import { CollectibleService } from './serivces/collectible-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ManageCollectiblesComponent } from './manage-collectibles/manage-collectibles.component';
import { MarketComponent } from './market/market.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const ourRoutes : Routes = [
  {path: '', component: AppComponent},
  {path: '/market', component: MarketComponent},
  {path: '/manageCollectibles', component: ManageCollectiblesComponent},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ManageCollectiblesComponent,
    MarketComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ourRoutes)
  ],
  providers: [CollectibleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
