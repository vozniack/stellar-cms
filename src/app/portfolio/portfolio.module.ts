import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PortfolioContentComponent} from './portfolio-content/portfolio-content.component';
import {PortfolioNavigationComponent} from './portfolio-navigation/portfolio-navigation.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioContentComponent,
    PortfolioNavigationComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule {
}
