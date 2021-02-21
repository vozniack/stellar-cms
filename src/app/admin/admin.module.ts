import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {FlexModule} from '@angular/flex-layout';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { AdminContentComponent } from './admin-content/admin-content.component';

@NgModule({
  declarations: [AdminComponent, AdminNavigationComponent, AdminContentComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexModule
  ]
})
export class AdminModule {
}
