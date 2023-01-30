import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {TabsComponent} from "./components/tabs/tabs.component";

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: "full"
      },
      {
        path: 'inicio',
        loadChildren: () => import('../app/pages/inicio/inicio.module').then(

          m => m.InicioPageModule)
      },
      {
        path: 'categorias',
        loadChildren: () => import('../app/pages/categorias/categorias.module').then( m =>

          m.CategoriasPageModule)
      },
      {
        path: 'buscar',
        loadChildren: () => import('../app/pages/buscar/buscar.module').then( m =>

          m.BuscarPageModule)
      }
    ]
  }/*,
  {
    path: 'serie',
    loadChildren: ()
  }*/

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
