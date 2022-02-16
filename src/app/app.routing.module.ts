import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArticlePageComponent } from "./article-page/article-page.component";
import { HomepageComponent } from "./home-page/homepage.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'article',
    redirectTo: 'article/',
    pathMatch: 'full',
  },
  {
    path: 'article/:userId',
    component: ArticlePageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
  // tslint:disable-next-line:typedef
  public static components = [
    ArticlePageComponent,
    HomepageComponent,
  ];
}
