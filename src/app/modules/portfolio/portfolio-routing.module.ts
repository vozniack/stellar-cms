import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioHomeComponent} from './portfolio-home/portfolio-home.component';
import {PortfolioCareerComponent} from './portfolio-career/portfolio-career.component';
import {PortfolioProjectsComponent} from './portfolio-projects/portfolio-projects.component';
import {PortfolioSkillsComponent} from './portfolio-skills/portfolio-skills.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    children: [
      {
        path: '',
        component: PortfolioHomeComponent
      },
      {
        path: 'career',
        component: PortfolioCareerComponent
      },
      {
        path: 'projects',
        component: PortfolioProjectsComponent
      },
      {
        path: 'skills',
        component: PortfolioSkillsComponent
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
