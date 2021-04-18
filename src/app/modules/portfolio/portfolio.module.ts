import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioRoutingModule} from './portfolio-routing.module';
import {FlexModule} from '@angular/flex-layout';
import {PortfolioNavigationComponent} from './portfolio-navigation/portfolio-navigation.component';
import {PortfolioFooterComponent} from './portfolio-footer/portfolio-footer.component';
import {PortfolioHomeComponent} from './portfolio-home/portfolio-home.component';
import {PortfolioProjectsComponent} from './portfolio-projects/portfolio-projects.component';
import {PortfolioCareerComponent} from './portfolio-career/portfolio-career.component';
import {PortfolioSkillsComponent} from './portfolio-skills/portfolio-skills.component';
import {PortfolioHomeWelcomeComponent} from './portfolio-home/portfolio-home-welcome/portfolio-home-welcome.component';
import {PortfolioHomeAboutComponent} from './portfolio-home/portfolio-home-about/portfolio-home-about.component';
import {PortfolioHomeProjectsComponent} from './portfolio-home/portfolio-home-projects/portfolio-home-projects.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioNavigationComponent,
    PortfolioFooterComponent,
    PortfolioHomeComponent,
    PortfolioProjectsComponent,
    PortfolioCareerComponent,
    PortfolioSkillsComponent,
    PortfolioHomeWelcomeComponent,
    PortfolioHomeAboutComponent,
    PortfolioHomeProjectsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FlexModule
  ]
})
export class PortfolioModule {
}
