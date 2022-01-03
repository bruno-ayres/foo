import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CfwFormField } from '../cfw-form-field';
import { CfwHostViewDirective } from '../cfw-host-view.directive';

export class CfwFieldComponent {
  form!: FormGroup;
  formField!: CfwFormField;

  get formControl(): FormControl {
    return this.form.controls[this.formField.key] as FormControl;
  }
}

@Component({
  selector: 'cfw-form-field',
  templateUrl: './cfw-form-field.component.html',
  styleUrls: ['./cfw-form-field.component.scss'],
})
export class CfwFormFieldComponent extends CfwFieldComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() formField!: CfwFormField;
  @ViewChild(CfwHostViewDirective, { static: true }) cfwHostView!: CfwHostViewDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    super();
  }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.formField.component);

    const viewContainerRef = this.cfwHostView.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance = componentRef.instance as CfwFieldComponent;
    instance.form = this.form;
    instance.formField = this.formField;
  }
}
