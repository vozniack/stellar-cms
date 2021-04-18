import {Component} from '@angular/core';
import {NAVIGATION_LINKS} from './portfolio-navigation.const';

@Component({
  selector: 'app-portfolio-navigation',
  templateUrl: './portfolio-navigation.component.html',
  styleUrls: ['./portfolio-navigation.component.scss']
})
export class PortfolioNavigationComponent {

  title = 'Stellar CMS'
  navigationLinks = NAVIGATION_LINKS;
}
