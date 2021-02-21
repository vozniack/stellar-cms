import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioContentComponent} from './portfolio-content/portfolio-content.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    children: [
      {
        path: '',
        component: PortfolioContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {
}
