import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[jhiHostView]',
})
export class HostViewDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
