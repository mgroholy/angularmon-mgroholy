import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { TypeListComponent } from './components/type-list/type-list.component';
import { TypeCardComponent } from './components/type-card/type-card.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PaginationComponent } from './components/pagination/pagination.component';

const appRoutes: Routes = [
  {
    path: 'pokemons',
    component: PokemonListComponent,
  },
  {
    path: 'types',
    component: TypeListComponent,
  },
  {
    path: 'pokemons/:id',
    component: PokemonDetailsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonListComponent,
    PokemonCardComponent,
    TypeListComponent,
    TypeCardComponent,
    PokemonDetailsComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
