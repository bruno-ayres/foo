import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cfwHostView]',
})
export class CfwHostViewDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
