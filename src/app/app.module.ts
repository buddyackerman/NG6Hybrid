import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { UpgradeModule, setAngularJSGlobal, downgradeComponent } from '@angular/upgrade/static';
import { UpgradeAdapter } from '@angular/upgrade';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgjsContentComponent } from './ngjs-content/ngjs-content.component';
import { RoutedComponentComponent } from './routed-component/routed-component.component';
import { TestDirective2Wrapper } from './directive-wrappers/TestDirective2Wrapper';
import { TestDirectiveWrapper } from './directive-wrappers/TestDirectiveWrapper';

//import * as angular from 'angular';
declare var angular: any;

angular
  .module('testApp')
  .directive('appRoot', downgradeComponent({ component: AppComponent }));

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
	RoutedComponentComponent,
    TestDirectiveWrapper,
    TestDirective2Wrapper
  ],
  imports: [
    BrowserModule,
	UpgradeModule,
	RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload', enableTracing: false })
  ],
  providers: [
	{ provide: APP_BASE_HREF, useValue: '/ngupgrade' },
    { provide: '$scope', useExisting: '$rootScope' }
  ],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }

  public ngDoBootstrap(app: any): void {
    setAngularJSGlobal(angular);
    this.upgrade.bootstrap(document.body, ['testApp'], { strictDi: false });
    app.bootstrap(AppComponent);
  }
}
