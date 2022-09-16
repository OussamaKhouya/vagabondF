import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
  // on change of router url the position of the screen will set to the top.
  scrollPositionRestoration: 'enabled',
};

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/blog/blog.module').then((m) => m.BlogModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
