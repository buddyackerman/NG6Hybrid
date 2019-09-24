import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
@Directive({
    selector: 'test-directive2'
})
export class TestDirective2Wrapper extends UpgradeComponent {
    
    constructor(elementRef: ElementRef, injector: Injector) {
      super('testDirective2', elementRef, injector);
    }
}
