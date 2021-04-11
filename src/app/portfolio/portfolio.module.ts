import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PortfolioNavigationComponent} from './portfolio-navigation/portfolio-navigation.component';
import {FlexModule} from '@angular/flex-layout';
import {PortfolioMainComponent} from './portfolio-main/portfolio-main.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioNavigationComponent,
    PortfolioMainComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FlexModule
  ]
})
export class PortfolioModule {
}
