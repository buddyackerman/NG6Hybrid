import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
    selector: 'test-directive'
})
export class TestDirectiveWrapper extends UpgradeComponent {
    
    constructor(elementRef: ElementRef, injector: Injector) {
      super('testDirective', elementRef, injector);
    }
}
