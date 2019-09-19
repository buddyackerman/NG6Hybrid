import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { UpgradeModule } from '@angular/upgrade/static';
import { UpgradeAdapter } from '@angular/upgrade';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgjsContentComponent } from './ngjs-content/ngjs-content.component';
import { RoutedComponentComponent } from './routed-component/routed-component.component';

declare var angular: any;

const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));
upgradeAdapter.upgradeNg1Provider('$scope');


upgradeAdapter.bootstrap(document.body, ['testApp']);


const routes: Routes = [
  {
    path: '',
    component: RoutedComponentComponent,
	pathMatch: 'full'
  },
  {
    path: '**',
    component: RoutedComponentComponent,
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NgjsContentComponent,
	upgradeAdapter.upgradeNg1Component('testDirective'),
	upgradeAdapter.upgradeNg1Component('testDirective2'),
	RoutedComponentComponent
  ],
  imports: [
    BrowserModule,
	UpgradeModule,
	RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload', enableTracing: false })
  ],
  providers: [
	{provide: APP_BASE_HREF, useValue: '/ngupgrade'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

