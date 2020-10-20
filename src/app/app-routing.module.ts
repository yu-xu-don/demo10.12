import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'user',
    loadChildren: () => import('./module/user/user.module').then(m => m.UserModule),
  },
  {
    path:'product',
    loadChildren: () => import('./module/product/product.module').then(m => m.ProductModule),
  },
  {
    path:'article',
    loadChildren: () => import('./module/article/article.module').then(m => m.ArticleModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
