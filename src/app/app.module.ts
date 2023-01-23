import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ComponentsModule} from "./components/components.module";
import {TabsComponent} from "./components/tabs/tabs.component";
import {InicioPageModule} from "./pages/inicio/inicio.module";
import {HeaderComponent} from "./components/header/header.component";

@NgModule({
  declarations: [AppComponent, TabsComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ComponentsModule, InicioPageModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
